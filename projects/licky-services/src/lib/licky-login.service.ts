import { Injectable, Inject } from '@angular/core';
import { LickyLoginConfigService } from './licky-login-config.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import { FirebaseDataService, GROUPS, USERS } from './firebase-data.service';
import { User, Group } from 'lick-data';
import { IdGeneratorService } from './id-generator.service';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LickyLoginService {

  public error = new Subject<any>();
  public errorMessage = new Subject<any>();
  public processMessage = new Subject<any>();
  public usersChanged = new Subject<User[]>();
  public userChanged = new BehaviorSubject<User>(null);
  public firebaseUser = new BehaviorSubject<firebase.User>(null);
  private _firebaseUser: firebase.User;
  private _user: User;
  private _users: any;
  private _loggedIn: boolean = false;
  public redirectUrl;
  private _token: string;
  private _firstName: string;
  private _lastName: string;

  constructor(@Inject(LickyLoginConfigService) private config, private _fds: FirebaseDataService) {
    this.initFirebase();
  }

  public setToken(token): void {
    this._token = token;
  }

  public canRead(): boolean {
    const allowed = ['admin', 'author', 'reader'];
    return this.matchingRole(allowed);
  }
  public canEdit(): boolean {
    const allowed = ['admin', 'author'];
    return this.matchingRole(allowed);
  }
  public canDelete(): boolean {
    const allowed = ['admin'];
    return this.matchingRole(allowed);
  }

  public getRole(): string {
    if (this.canDelete())
      return "Admin";
    else if (this.canEdit())
      return "Author";
    else if (this.canRead())
      return "Reader";
    else
      return "User";
  }

  public updateDisplayName(name: string, url: string): void {
    this._firebaseUser.updateProfile({
      displayName: name,
      photoURL: url
    }).then(() => {
      console.log("Display Updated", name, JSON.stringify(this._firebaseUser))
      if (this._user)
        this._user.url = url;
    }).catch(error => {
      console.error(error);
    })
  }

  public updateEmailAddress(emailAddress: string): void {
    this._firebaseUser.updateEmail(emailAddress).then(() => {
      if (this._user)
        this._user.email = emailAddress;
    }).catch(error => {
      console.error(error);
    })
  }

  public updatePassword(password: string): void {
    this._firebaseUser.updatePassword(password).then(() => {

    }).catch(error => {
      console.error(error);
    })
  }



  private matchingRole(allowedRoles): boolean {
    if (!this._user || !this._user.roles) return false;
    const userRoles = Object.keys(this._user.roles);

    let intersection = userRoles.filter(x => allowedRoles.includes(x));
    return (intersection.length != 0);
  }


  private initFirebase() {
    console.info("Initializing Firebase with " + JSON.stringify(this.config))
    if (!firebase.apps.length) {
      firebase.initializeApp(this.config);
    }
    this._fds.init();
    this.userStateChange();
  }

  public getUserByID(id: string): User {
    if (!this._users) return null;
    return this._users[id];
  }

  public getUser(): User {
    return this._user;
  }

  public signInWithUserNameAndPassword(emailAddress: string, password: string, router: Router, redirectURL: string): boolean {
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
      .then((authData) => {
        this._loggedIn = true;
        console.info(emailAddress, "logged in", redirectURL, router)
        router.navigate([redirectURL]);
        return true;
      })
      .catch((error) => {
        // Route to error page
        console.error(error);
        this.error.next(error.code);
        this.errorMessage.next(error.message);
      })
    return false;
  }

  public updateUserInfo(firstName: string, lastName: string, firebaseUser: firebase.User): void {
    this._firstName = firstName;
    this._lastName = lastName;
    firebaseUser.updateProfile({
      displayName: firstName + " " + lastName,
    }).then(() => {
      console.info("DISPLAY NAME UPDATED TO - " + firebaseUser.displayName);
    },
      (error) => {
        console.error(error)
      }
    )
  }

  public isLoggedIn(): boolean {
    // console.info("LOGIN STATUS", this._firebaseUser, this._user);
    this._loggedIn = (this._firebaseUser && this._user) ? true : false;
    return (this._loggedIn);
  }

  public setUser(user: User): void {
    this._user = user;
  }

  public setAway(): void {
    if (this._user) {
      this._user.status = 'away';
      this.update();
    }
  }

  public setOnline(): void {
    if (this._user) {
      this._user.status = 'online';
      this.update();
    }
  }

  public setOffline(): void {
    if (this._user) {
      this._user.status = 'offline';
      this.update();
    }
  }

  public signOut() {

    this.setOffline();

    firebase.auth().signOut().then(() => {
      console.info("Logging out user");
      this._loggedIn = false;
      this.firebaseUser.next(null);
      this._firebaseUser = null;
      this._user = null;
      this._fds.setUser(null);
      this.userChanged.next(null);
      console.info("Finished logging out user");
    }, function (error) {
      console.error(error);
      this.error.next(error.code);
      this.errorMessage.next(error.message);
    });
  }

  public signInWithGoogle(router: Router, redirectURL: string) {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(result => {

      if (result.user) {

      }
    });
  }

  public signInWithTwitter(router: Router, redirectURL: string) {
    var provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  }

  public signInWithFacebook(router: Router, redirectURL: string) {
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope('user_birthday');

    firebase.auth().signInWithRedirect(provider);
  }


  public sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification().then(() => {
      this.processMessage.next('Email Verification Sent!')
    }).catch((error) => {
      console.error(JSON.stringify(error), JSON.stringify(firebase.auth().currentUser));
      this.processMessage.next('Unable to process request');
    });
  }

  public sendPasswordReset(emailAddress: string, router: Router, redirectURL: string) {
    firebase.auth().sendPasswordResetEmail(emailAddress)
      .then(() => {
        this.processMessage.next('Password Reset Email Sent!');
      }).catch((error) => {
        var errorCode = error.code;

        if (errorCode == 'auth/invalid-email') {
          this.errorMessage.next(error.message);
        } else if (errorCode == 'auth/user-not-found') {
          this.errorMessage.next(error.message);
        }
        console.error(error);
        this.error.next(error.code);
      });
  }

  public signUpUser(emailAddress: string, password: string, firstName: string, lastName: string, url: string, router: Router, redirectURL: string, referral?: string) {
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      .then((authData) => {
        if (firstName && lastName)
          this.updateUserInfo(firstName, lastName, authData.user);
        router.navigate([redirectURL])
      })
      .catch(
        error => {
          this.errorMessage.next(error.message)
        });
  }

  private userStateChange() {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        this.firebaseUser.next(user);
        this._firebaseUser = user;
        this._loggedIn = true;
        this.initUsers();
      }
    })
  }

  private initUsers(): void {
    this._fds.getDataCollection(USERS).subscribe((users) => {
      if (!users) {
        console.info("NO USERS FOUND!");
        this.createAdminUser();
      } else {
        this._users = users;
        this.usersChanged.next(this._users);

        try {

          const u = this._users[this._firebaseUser.uid];


          if (u === null || typeof u != 'object') {
            // console.log("CREATE USER");
            this.createUser();
          } else {
            // console.log("USER FOUND", JSON.stringify(u));
            this.setFirebaseAttributes(u);
          }

        } catch (err) {
          console.error(err);
        }
      }
    })
  }

  private createAdminUser(): void {
    let user = new User();
    user.roles = { reader: true, author: true, admin: true };
    this.setUserID(user);
  }

  private createUser(): void {
    let user = new User();
    user.roles = { reader: true, author: true };
    this.setUserID(user);
  }

  private setUserID(user: User): void {
    user.account = IdGeneratorService.generateUUID();
    this.setAppUser(user);
    this._fds.updateData(USERS, this._firebaseUser.uid, user);
  }

  private setAppUser(user: User, referral?: string) {
    if (referral)
      user.referral = referral;
    user.timeStamp = new Date().getTime();
    user.draft = false;
    user.deleted = false;
    user.helpNeeded = true;
    user.newsSources = [];
    user.status = 'online';
    user.lastViewed = new Date();
    this.setFirebaseAttributes(user);
  }

  private setUsersName(user: User): void {
    user.name = this._firebaseUser.displayName;
    console.log("NAME", user.name, "DISPLAY NAME", this._firebaseUser.displayName);
    if (this._firebaseUser.displayName == null) {
      if (this._firstName && this._lastName)
        user.name = this._firstName + " " + this._lastName;
    }

  }

  private setFirebaseAttributes(user: User) {
    this.setUsersName(user);
    user.url = this._firebaseUser.photoURL;
    user.user_id = this._firebaseUser.uid;
    user.userName = this._firebaseUser.email;
    user.userImage = this._firebaseUser.photoURL;
    user.id = this._firebaseUser.uid;
    user.user_id = this._firebaseUser.uid;
    user.lastUpdatedBy = this._firebaseUser.displayName;
    this._user = user;
    this._fds.setUser(this._user);
    this.userChanged.next(this._user);
  }



  public update(): void {
    if (!this._user) return;
    this.updateUser(this._user);
  }

  public updateUser(user: User): void {
    if (!user) return;
    console.info("UPDATING USER", JSON.stringify(user))
    this._fds.updateData(USERS, user.id, user);
    this.userChanged.next(user);
  }


}
