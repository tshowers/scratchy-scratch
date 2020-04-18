import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'licky-lick-app-widget-notification',
  templateUrl: './lick-app-widget-notification.component.html',
  styles: []
})
export class LickAppWidgetNotificationComponent implements OnInit {

  @Input() menuIcon: MenuIcon;

  itemChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }


}

export interface MenuIcon {
  link: string;
  iconClass: string;
  description: string;
}

