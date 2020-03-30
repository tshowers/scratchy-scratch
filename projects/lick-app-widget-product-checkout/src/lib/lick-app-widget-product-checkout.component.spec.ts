import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetProductCheckoutComponent } from './lick-app-widget-product-checkout.component';

describe('LickAppWidgetProductCheckoutComponent', () => {
  let component: LickAppWidgetProductCheckoutComponent;
  let fixture: ComponentFixture<LickAppWidgetProductCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetProductCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetProductCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
