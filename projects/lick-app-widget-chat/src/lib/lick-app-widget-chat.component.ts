import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Message, User, Upload } from 'lick-data';
import { MESSAGES, FirebaseDataService, LickyLoggerService, UploadService, SortHelperService } from 'licky-services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'licky-lick-app-widget-chat',
  templateUrl: './lick-app-widget-chat.component.html',
  styles: []
})
export class LickAppWidgetChatComponent implements OnInit, OnDestroy {

  @Input() headingText = "Chat";
  @Input() isDummyData = false;
  @Input() isSmall: boolean = false;
  @Input() messages: Message[] = [{
    "id": Math.floor(Math.random() * 1000).toString(),
    "text": "Modi ratione aliquid non. Et porro deserunt illum sed velit necessitatibus. ",
    "name": "John Hammond",
    "replies": [],
    "favored": false,
    "bookmarked": false,
    "draft": true,
    "deleted": false,
    "icon": "https://via.placeholder.com/64x64.png",
    "user_id": "1002",
    "timeStamp": new Date(),
    "handle": "@JohnHammond",
    "status": "notification online",
    "shared": false,
    "article": null,
    "lastUpdated": new Date(),
    "userImage": null

  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "text": "Provident impedit atque nemo culpa et modi molestiae. Error non dolorum voluptas non a. Molestiae et nobis nisi sed",
    "name": "Bill Burr",
    "replies": [],
    "favored": false,
    "bookmarked": false,
    "draft": true,
    "deleted": false,
    "icon": "https://via.placeholder.com/64x64.png",
    "user_id": Math.floor(Math.random() * 1000).toString(),
    "timeStamp": new Date(),
    "handle": "@BillBurr",
    "status": "notification online",
    "shared": false,
    "article": null,
    "lastUpdated": new Date(),
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "text": "Id vel ducimus perferendis fuga excepturi nulla. Dolores dolores amet et laborum facilis. Officia magni ut non autem et qui incidunt.",
    "name": "Wayne Newton",
    "replies": [],
    "favored": false,
    "bookmarked": false,
    "draft": true,
    "deleted": false,
    "icon": "https://via.placeholder.com/64x64.png",
    "user_id": Math.floor(Math.random() * 1000).toString(),
    "timeStamp": new Date(),
    "handle": "@WayneNewton",
    "status": "notification online",
    "shared": false,
    "article": null,
    "lastUpdated": new Date(),
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "text": "Provident impedit atque nemo culpa et modi molestiae. Error non dolorum voluptas non a. Molestiae et nobis nisi sed.",
    "name": "John Hammond",
    "replies": [],
    "favored": false,
    "bookmarked": false,
    "draft": true,
    "deleted": false,
    "icon": "https://via.placeholder.com/64x64.png",
    "user_id": "1002",
    "timeStamp": new Date(),
    "handle": "@JohnHammond",
    "status": "notification online",
    "shared": false,
    "article": null,
    "lastUpdated": new Date(),
  }];

  @Input() currentUser: User = {
    "id": "1002",
    "name": "John Hammon",
    "account": "3983498",
    "shared": false,
    "lastUpdated": new Date(),
    "timeStamp": new Date(),
    "user_id": Math.floor(Math.random() * 1000).toString(),
    "userName": "Bill Moyer",
    "publishedAt": new Date()
  };

  @Input() activeUsers;

  @Input() defaultImage: string = "https://via.placeholder.com/64x64.png";

  @Input() db: FirebaseDataService;


  message: Message = new Message();

  private _messageSubscription : Subscription;

  selectedFiles: FileList;

  currentUpload: Upload;


  constructor(private _uploadService: UploadService, private _sortHelperService: SortHelperService) { }

  ngOnInit() {
    if (!this.isDummyData)
      this.doMessages();
  }

  ngOnDestroy() {
    if (this._messageSubscription)
      this._messageSubscription.unsubscribe();
  }

  onSubmit(): void {
    this.saveMessage();
  }

  public doMessages() : void {
     this._messageSubscription = this.db.getDataCollection(MESSAGES)
    .subscribe((messageData: Message[]) => {
      // LickyLoggerService.info("MESSAGES CHANGED", JSON.stringify(messageData))
      if (messageData) {
        this.messages = this.db.getListToArray(messageData);
        this._sortHelperService.sortByLastUpdated(this.messages);
      } else {
        this.messages = [];
      }
    })
  }

  public saveMessage() : void {
    // LickyLoggerService.info("MESSAGE", JSON.stringify(this.message))
    this.db.writeData(MESSAGES, this.message).subscribe((key) => {
      this.message.id = key;
      this.uploadSingle();
      setTimeout(() => {
        this.message = new Message();
        this.deleteAttachment();
      }, 1500)
    });
  }


  deleteAttachment() {
    this.selectedFiles = null;
  }

  public detectFiles(event) {
    this.selectedFiles = event.target.files;
  }


  private uploadSingle() {
    if (this.selectedFiles) {
      let file = this.selectedFiles.item(0)
      if (file) {
        this.currentUpload = new Upload(file);
        this.currentUpload.message_id = this.message.id;
        this._uploadService.pushFileToStorage(this.currentUpload, MESSAGES, '/messages/' + this.message.id, this.message, this.db);
      }
    }
  }




}
