import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-product-categories',
  templateUrl: './lick-app-widget-product-categories.component.html',
  styles: []
})
export class LickAppWidgetProductCategoriesComponent implements OnInit {
  @Input() headerText = "Categories";
  @Input() categories : any[] = [
    {
      "name": "Pro",
      "count": 4,
    },
    {
      "name": "Premium",
      "count": 14
    },
    {
      "name": "Standard",
      "count": 9
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
