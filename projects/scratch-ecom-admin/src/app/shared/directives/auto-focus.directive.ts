import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';
import { LickyLoggerService } from 'licky-services';

@Directive({
  selector: '[licky-auto-focus]'
})
export class AutoFocusDirective implements AfterContentInit {

  public constructor(private el: ElementRef) {

  }

  public ngAfterContentInit() {

    setTimeout(() => {
      LickyLoggerService.info(null, "AutoFocusDirective");
      this.el.nativeElement.focus();

    }, 500);

  }

}
