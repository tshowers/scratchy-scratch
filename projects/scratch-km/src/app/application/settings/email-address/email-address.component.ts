import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
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

  clicked: boolean = false;

  constructor(private dm: DataMediationService,
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

  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value): void {

  }

  onSubmit(): void {
    this.clicked = true;
    this.dm.loginService.updateEmailAddress(this.emailAddress);
    setTimeout(() => { window.location.reload() }, 100);

  }

  get diagnostic() {
    return JSON.stringify(this.user, null, 2)
    + ", emailAddress=" + this.emailAddress;
  }

}
