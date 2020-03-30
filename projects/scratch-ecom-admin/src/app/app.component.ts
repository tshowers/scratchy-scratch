import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isHome: boolean = false;

  public constructor(private _location: Location, private _activatedRoute: ActivatedRoute, public router: Router, private _titleService: Title, private _wowService: NgwWowService) {  }

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
        this.isHome = (this._location.path().indexOf('stores') < 0);
        this._wowService.init();
      });
}}
