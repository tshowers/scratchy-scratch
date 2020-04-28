import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { BreadCrumbService, SETTING_EMAIL_ADDRESS } from '../../../shared/services/bread-crumb.service';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { User } from 'lick-data';

@Component({
  selector: 'app-email-address',
  templateUrl: './email-address.component.html',
  styleUrls: ['./email-address.component.css']
})
export class EmailAddressComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  public emailAddress: string = "";

  user: User;

  constructor(private dm: DataMediationService,
    public breadCrumbService: BreadCrumbService,
    protected renderer2: Renderer2,
    public router: Router) { 
      super(router, renderer2);

    }

  ngOnInit(): void {
    if (this.dm && this.dm.emailAddress)
    this.emailAddress = this.dm.emailAddress;
  this.setBreadCrumb();

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {
    this.breadCrumbService.setContext(SETTING_EMAIL_ADDRESS)
    this.breadCrumbService.setBreadCrumb();
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value): void {

  }

  onSubmit(): void {

  }

  get diagnostic() {
    return JSON.stringify(this.user, null, 2)
    + ", emailAddress=" + this.emailAddress;
  }

}
