import { Component, OnInit, OnDestroy } from '@angular/core';
import { RemoteAssetService } from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit, OnDestroy {

  public bodyText;

  private _fileSubscription: Subscription;


  constructor(private _remoteAssetService: RemoteAssetService) { }

  ngOnInit(): void {
    this._fileSubscription = this._remoteAssetService.getFileContents('./assets/privacy.txt', this._remoteAssetService.TEXT)
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
