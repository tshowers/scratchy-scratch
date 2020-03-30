import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetProductWishlistComponent } from './lick-app-widget-product-wishlist.component';

describe('LickAppWidgetProductWishlistComponent', () => {
  let component: LickAppWidgetProductWishlistComponent;
  let fixture: ComponentFixture<LickAppWidgetProductWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetProductWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetProductWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
