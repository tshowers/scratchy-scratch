import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LickyLoggerService } from 'licky-services';

@Component({
  selector: 'licky-lick-marketing-try-it1',
  templateUrl: './lick-marketing-try-it1.component.html',
  styles: []
})
export class LickMarketingTryIt1Component implements OnInit {

  @Input() headingText = "Try it free for 14 day";
  @Input() buttonLink = "/";
  @Input() buttonText = "Start Free Trial";

  @Output() pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPageEvent(link) : void {
    LickyLoggerService.log("Link clicked", link)
    this.pageEvent.emit(link);
  }

}
