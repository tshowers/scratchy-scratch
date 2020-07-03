import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Message, User, Contact } from 'lick-data';
import { LickyLoggerService, SortHelperService, LickyLoginService, FirebaseDataService, MESSAGES } from 'licky-services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'licky-lick-app-widget-notification-message',
  templateUrl: './lick-app-widget-notification-message.component.html',
  styles: []
})
export class LickAppWidgetNotificationMessageComponent implements OnInit, OnDestroy {

  messages: Message[];
  private _userContact: Contact;
  private _user: User;
  maxArticleLength = 30;
  messageSubscription: Subscription;

  public messagesChecked: boolean = false;

  @Input() router: Router;
  @Input() loginService: LickyLoginService;
  @Input() db: FirebaseDataService;
  @Input() messageLink;

  constructor(private _sortHelperService: SortHelperService) { }

  ngOnInit() {
    LickyLoggerService.info("DB=" + this.db, "LoginService=" + this.loginService)
    if (this.db && this.loginService)
      this.setNotifications();
    else
      this.messagesChecked = true;
  }

  private setNotifications(): void {
    this._user = this.loginService.getUser();
    // LickyLoggerService.info(null,"setNotifications()")
    this.messageSubscription = this.db.getDataCollection(MESSAGES)
    .subscribe((messageData: Message[]) => {
      // LickyLoggerService.info("AFTER SUBSCRIBE", JSON.stringify(this.messages))
      if (messageData) {
        this.messages = this.db.getListToArray(messageData);
        this._sortHelperService.sortByLastUpdated(this.messages);
        // LickyLoggerService.info("MESSAGE NOTIFICATION", JSON.stringify(this.messages))
        this.setUpIndicator();
      } else {
        this.messages = [];
      }
    })

  }


  ngOnDestroy() {
    if (this.messageSubscription)
      this.messageSubscription.unsubscribe();

  }

  checkingMessages(): void {
    if (!this._user) return
    this._user.messagesLastCheckedDate = new Date().getTime();
    this.toggleIndicator();
    this.loginService.update();
  }

  private toggleIndicator() {
      this.setUpIndicator();
  }

  private setUpIndicator(): void {
    this.messagesChecked = true;
    const lastChecked = this._user.messagesLastCheckedDate;
    if (this.messages)
      for (let i = 0; i < this.messages.length; i++) {
        if (this.isIndicatorNeeded(this.messages[i].lastUpdated, lastChecked)) {
          this.messagesChecked = false;
          break;
        }
      }
  }

  private isIndicatorNeeded(value: Date, compareDate: Date): boolean {
    if (!value || !compareDate) return false;
    const lastChecked = new Date(compareDate);
    const messageDate = new Date(value);
    return (messageDate.getTime() > lastChecked.getTime());
  }


}
