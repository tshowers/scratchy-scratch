import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  logo = "assets/images/logo.png";
  logoName = "16AHEAD";
  companyLink = "/";
  headingText = "";
  backgroundImage = "assets/images/privacy.jpg";

  menuItems: any[] = [
    {
      "link": "/login",
      "name": "Login",
    },
    {
      "link": "/sign-up",
      "name": "Sign Up"
    }
  ];


  constructor(public router: Router, private _activatedRoute: ActivatedRoute, private _titleService: Title) { }

  ngOnInit(): void {
    this.setPageTitle();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.setPageTitle();
      })
  }


  private setPageTitle() {
    console.log(this._titleService.getTitle())
    if (this._titleService.getTitle())
      this.headingText = this._titleService.getTitle();
  }
}
