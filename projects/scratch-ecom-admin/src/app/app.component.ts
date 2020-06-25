import { Component, OnInit, Renderer2 } from '@angular/core';
import { Location } from "@angular/common";

import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { NgwWowService } from 'ngx-wow';
import { NewsService } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { Subscription } from 'rxjs';
import { DataMediationService } from './shared/services/data-mediation.service';
import { environment } from '../environments/environment';
import { Message } from 'lick-data';

export const apps = environment.apps;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends LickAppPageComponent implements OnInit {

  isHome: boolean = false;
  private _store_id: string;
  private _catalog_id: string;
  pageName: string;

  readonly apps = apps;

  homeMenu: any[] = [];

  private _paramSubscription: Subscription;


  public constructor(protected renderer2: Renderer2, private _location: Location,
    private _activatedRoute: ActivatedRoute,
    public newsService: NewsService,
    public dm: DataMediationService,
    public router: Router, private _titleService: Title, private _wowService: NgwWowService) {
    super(router, renderer2);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data))
      .subscribe((event) => {
        this._titleService.setTitle(event['title']);
        this.pageTitle = event['title'];
        this.isHome = (this._location.path().indexOf('stores') < 0);
        this._wowService.init();
      });
    this.initMenu();
  }

    


  initMenu(): void {
    this.homeMenu.push(
      {
        "link": "/stores/help",
        "iconClass": "fa fa-question",
        "description": "Go to the help page"
      },
      {
        "link": "/stores/dashboard",
        "iconClass": "fa-line-chart",
        "description": "View dashboard of the stores performance"
      }

    )
  }

  setMessages() : void {
    this.dm.db.getDataCollection
  }

  onProfile() : void {
    this.router.navigate(['/stores/profile'])
  }

  onSettings(): void {
    this.router.navigate(['/stores/general-settings']);
  }


}
