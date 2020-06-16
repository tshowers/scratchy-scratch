import { Injectable } from '@angular/core';
import { FirebaseDataService, TASKS, APPROVALS } from './firebase-data.service';

import { Group } from 'lick-data';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class DataIntermediaryService {

  private groups: Group[];

  constructor(public db: FirebaseDataService) {
    this.setGroups();
  }

  setGroups(): void {
    // this.groups = this.authService.userService.groups;
  }

 
}
