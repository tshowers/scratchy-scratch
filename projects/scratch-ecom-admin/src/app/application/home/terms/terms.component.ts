import { Component, OnInit, OnDestroy } from '@angular/core';
import { RemoteAssetService } from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit, OnDestroy {

  public bodyText;

  private _fileSubscription: Subscription;


  constructor(private _remoteAssetService: RemoteAssetService) { }

  ngOnInit(): void {
    this._fileSubscription = this._remoteAssetService.getFileContents('./assets/terms.txt', this._remoteAssetService.TEXT)
      .subscribe({
        next: data => { this.bodyText = data; },
        error: err => console.error(err)
      })
  }
  ngOnDestroy() {
    if (this._fileSubscription)
      this._fileSubscription.unsubscribe();
  }

}
