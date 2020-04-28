import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { BreadCrumbService, SETTING_VERIFY } from '../../../shared/services/bread-crumb.service';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { User } from 'lick-data';

@Component({
  selector: 'app-veriify',
  templateUrl: './veriify.component.html',
  styleUrls: ['./veriify.component.css']
})
export class VeriifyComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  public verified: boolean;

  user: User;


  constructor(private dm: DataMediationService,
    public breadCrumbService: BreadCrumbService,
    protected renderer2: Renderer2,
    public router: Router) { 
      super(router, renderer2);

    }

  ngOnInit(): void {
    if (this.dm)
    this.verified = this.dm.emailVerified;
  this.setBreadCrumb();

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {
    this.breadCrumbService.setContext(SETTING_VERIFY)
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
    + ", verified=" + this.verified;
  }

}
