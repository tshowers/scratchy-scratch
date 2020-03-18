import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-lick-app-widget-product-search-by-tag',
  templateUrl: './lick-app-widget-product-search-by-tag.component.html',
  styles: []
})
export class LickAppWidgetProductSearchByTagComponent implements OnInit {

  @Input() headerText = "Search by Tag";
  @Input() tags : any[] = [
    {
      "name": "Jewelry"
    },
    {
      "name": "T-Shirt"
    },
    {
      "name": "Mug"
    }
  ]
  @Output() tagEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTag(item) : void {
    this.tagEvent.emit(item.name);
  }

}
