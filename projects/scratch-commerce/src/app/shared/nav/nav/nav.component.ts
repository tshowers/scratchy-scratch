import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService, FirebaseDataService } from 'licky-services';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';

export const maintenance = environment.maintenance;


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  @Input() loggedIn: boolean = false;
  @Input() isAdmin: boolean = false;

  menuItems: any[] = [
    {
      "link": "/shop/about",
      "name": "Home",
    },
    {
      "link": "/application/sign-up",
      "name": "Sign Up"
    },
    {
      "link": "/application/login",
      "name": "Login"
    },
  ]

  loggedInMenuItems: any[] = [
    {
      "link": "/shop/products",
      "name": "Shop"
    },
    {
      "link": "/shop/cart",
      "name": "Cart"
    },
    {
      "link": "/shop/wishlist",
      "name": "Wish List"
    },
    {
      "link": "/shop/product",
      "name": "Product"
    },
    {
      "link": "/shop/checkout",
      "name": "Check Out"
    },
    {
      "link": "/application/logout",
      "name": "Log Out"
    },
  ]


  loggedInAdminMenuItems: any[] = [
    {
      "link": "/application/dashboard",
      "name": "Dashboard",
    },
    {
      "link": "/application/stores",
      "name": "Stores",
    },
    {
      "link": "/application/logout",
      "name": "Log Out"
    },
  ]

  verified: boolean = false;
  verificationText = "Unverified";
  profileLink = "/application/profile";
  profileImage;
  displayName;
  private _messageSubscription: Subscription;

  private _loginSubscription: Subscription;

  constructor(public loginService: LickyLoginService, public router: Router, public db: FirebaseDataService) { }

  ngOnInit() {
    this._loginSubscription = this.loginService.firebaseUser.subscribe((user) => {
      this.loggedIn = (user) ? true : false;
      console.info("LOGGED IN = ", this.loggedIn);
      this.setVerified(user);
      if (maintenance) {
        this.loggedIn = false;
      }

      if (this.loggedIn && this.isAdmin) {
        this.loggedInMenuItems = this.loggedInAdminMenuItems;
      }
    })

    this._messageSubscription = this.loginService.processMessage.subscribe((message) => {
      this.verificationText = message;
    })
  }

  ngOnDestroy() {
    this._loginSubscription.unsubscribe();
    this._messageSubscription.unsubscribe();
  }

  onMenuEvent(value): void {
    this.loginService.sendEmailVerification();
  }

  private setVerified(user): void {
    if (user) {
      this.verified = user.emailVerified;
      this.displayName = user.displayName;
      if (user.photoURL)
        this.profileImage = user.photoURL;
    }
  }

}