import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetProductBestSellersComponent } from './lick-app-widget-product-best-sellers.component';

describe('LickAppWidgetProductBestSellersComponent', () => {
  let component: LickAppWidgetProductBestSellersComponent;
  let fixture: ComponentFixture<LickAppWidgetProductBestSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetProductBestSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetProductBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
