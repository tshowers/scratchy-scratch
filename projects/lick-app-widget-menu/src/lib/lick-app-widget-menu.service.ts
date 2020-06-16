import { Injectable } from '@angular/core';
import { LickyLoggerService } from 'licky-services';

@Injectable({
  providedIn: 'root'
})
export class LickAppWidgetMenuService {

  constructor() { }

  public signOut() {
    LickyLoggerService.log(null, "Sign Out clicked")
  }

}
