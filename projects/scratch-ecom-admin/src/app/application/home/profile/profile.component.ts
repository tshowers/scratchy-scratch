import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { BreadCrumbService } from '../../../shared/services/bread-crumb.service';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {



  constructor(public dm: DataMediationService,
    public breadCrumbService: BreadCrumbService,
    protected renderer2: Renderer2,
    public router: Router) {
    super(router, renderer2);
  }

  ngOnInit(): void {
    this.setBreadCrumb();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {
    this.breadCrumbService.setBreadCrumb();
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onResendVerification() : void {
    this.dm.loginService.sendEmailVerification();
  }

  onSearch(value): void {
    // TODO
  }


}
