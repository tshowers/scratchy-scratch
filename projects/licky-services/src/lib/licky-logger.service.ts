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
        console.log('%c' + message, 'color: #4964a3') :
        console.log('%c' + description, 'color: #4964a3', message);
  }

  public static log(description, message): void {
    if (debug)
      (!description) ?
        console.log('%c' + message, 'color: #376346') :
        console.log('%c' + description, 'color: #376346', message);
  }

  public static error(description, message): void {
    if (debug)
      (!description) ?
        console.log('%c' + message, 'color: #ff0000') :
        console.log('%c' + description, 'color: #ff0000', message);
  }
}
