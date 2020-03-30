import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  isCreateAccount: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() : void {

  }

  onLostPassword() : void {

  }

  onCoupon() : void {

  }

  onPayPal() : void {
    
  }

}
