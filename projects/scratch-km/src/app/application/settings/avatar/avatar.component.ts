import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { User, Upload } from 'lick-data';
import { UploadService, USERS } from 'licky-services';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  user: User;

  selectedFiles: FileList;

  currentUpload: Upload;

  displayName;

  clicked: boolean = false;


  constructor(private dm: DataMediationService,
    private _uploadService: UploadService,
    protected renderer2: Renderer2,
    public router: Router) {
    super(router, renderer2);
  }

  ngOnInit(): void {
    if (this.dm && this.dm.user) {
      this.user = this.dm.user;
    } else {
      this.user = new User();
    }
    this.setUserPhoto();

  }

  private setUserPhoto(): void {
    if (this.dm.photoURL)
      this.user.url = this.dm.photoURL;

    if (this.dm.displayName)
      this.displayName = this.dm.displayName;  

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/topics/dashboard", active: true },
      { name: "topics", link: "/application/topics", active: false },
      { name: "feed", link: "/application/topics/feed", active: false },
      { name: "new", link: "/application/topics/new", active: false },
    ]
  }


  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value): void {

  }

  onSubmit(): void {
    this.clicked = true;
    this.uploadSingle();
    setTimeout(() => { 
      window.location.reload();
    }, 10000);


  }

  private uploadSingle() {
    if (this.selectedFiles) {
      let file = this.selectedFiles.item(0)
      if (file) {
        this.currentUpload = new Upload(file);
        this.currentUpload.user_id = this.user.id;
        this._uploadService.pushFileToStorage(this.currentUpload, USERS, '/users/' + this.user.id, this.user, this.dm.db, true, this.dm.loginService, this.displayName);
      }
    }
  }

  deleteAttachment() {
    this.selectedFiles = null;
  }

  public detectFiles(event) {
    this.selectedFiles = event.target.files;
  }


  get diagnostic() {
    return `${JSON.stringify(this.user, null, 2)}, photoURL=${this.dm.photoURL}`
  }

}
