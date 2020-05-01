import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { BreadCrumbService, SETTING_GENERAL } from '../../../shared/services/bread-crumb.service';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { User } from 'lick-data';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  role: string;
  user: User;


  constructor(public dm: DataMediationService,
    public breadCrumbService: BreadCrumbService,
    protected renderer2: Renderer2,
    public router: Router) {
    super(router, renderer2);
  }

  ngOnInit(): void {
    this.initValues();
  }

  ngOnDestroy() {
    this.onSubmit();
    super.ngOnDestroy();
  }

  initValues() : void {
    this.user = this.dm.user;
    this.user.role = this.dm.loginService.getRole();
    this.setBreadCrumb();
  }


  setBreadCrumb(): void {
    this.breadCrumbService.setContext(SETTING_GENERAL);
    this.breadCrumbService.setBreadCrumb();
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value): void {
    // TODO
  }

  onSubmit(): void {

    if (!this.user.roles) {
      this.user.roles = { reader: true, author: true };
    }
    console.info("onSubmit", JSON.stringify(this.user));

    this.dm.setNewUser(this.user);
  }

  get diagnostic() {
    return JSON.stringify(this.user, null, 2)
  }


}
