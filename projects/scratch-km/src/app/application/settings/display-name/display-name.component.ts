import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { User } from 'lick-data';

@Component({
  selector: 'app-display-name',
  templateUrl: './display-name.component.html',
  styleUrls: ['./display-name.component.css']
})
export class DisplayNameComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  public displayName: string = "";

  user: User;

  clicked: boolean = false;

  constructor(private dm: DataMediationService,
    protected renderer2: Renderer2,
    public router: Router
  ) {
    super(router, renderer2);

  }

  ngOnInit(): void {
    if (this.dm && this.dm.displayName)
      this.displayName = this.dm.displayName;
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
    this.dm.loginService.updateDisplayName(this.displayName, this.dm.photoURL);
    setTimeout(() => { 
      window.location.reload();
    }, 100);
  }

  get diagnostic() {
    return JSON.stringify(this.user, null, 2)
    + ", displayName=" + this.displayName;
  }


}
