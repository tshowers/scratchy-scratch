import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-generic-nav',
  templateUrl: './lick-app-widget-generic-nav.component.html',
  styles: []
})
export class LickAppWidgetGenericNavComponent implements OnInit {

  @Input() homePage = "/stores/dashboard";

  @Input() links: any[] = [
    { name: "home", link: "/", active: false },
    { name: "contacts", link: "/", active: false },
    { name: "create", link: "/", active: true }
  ];
  @Input() context: string = "N/A";

  @Output() pageEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
