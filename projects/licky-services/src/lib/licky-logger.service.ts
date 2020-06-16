import { Injectable } from '@angular/core';

import { environment } from '../environment';

export const debug = environment.debug;

@Injectable({
  providedIn: 'root'
})
export class LickyLoggerService {

  constructor() { }

  public static info(description, message): void {
    if (debug)
      (!description) ?
        console.log('%c' + message, 'color: #0000ff') :
        console.log('%c' + description, 'color: #0000ff', message);
  }

  public static log(description, message): void {
    if (debug)
      (!description) ?
        console.log('%c' + message, 'color: #00ff00') :
        console.log('%c' + description, 'color: #00ff00', message);
  }

  public static error(description, message): void {
    if (debug)
      (!description) ?
        console.log('%c' + message, 'color: #ff0000') :
        console.log('%c' + description, 'color: #ff0000', message);
  }
}
