import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseDataService, LickyLoginService} from 'licky-services';

@Component({
  selector: 'app-factory-page',
  templateUrl: './factory-page.component.html',
  styleUrls: ['./factory-page.component.css']
})
export class FactoryPageComponent implements OnInit {

  exploreLink = "https://lick-test.firebaseapp.com/marketing/general-widgets";

  constructor(public loginService: LickyLoginService, public router: Router, private _fds: FirebaseDataService) { }

  ngOnInit() {
  }

  public onPageEvent(value): void {
    window.open(value, '_blank');
  }

}
