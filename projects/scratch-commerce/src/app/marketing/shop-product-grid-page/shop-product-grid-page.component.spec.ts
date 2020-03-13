import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductGridPageComponent } from './shop-product-grid-page.component';

describe('ShopProductGridPageComponent', () => {
  let component: ShopProductGridPageComponent;
  let fixture: ComponentFixture<ShopProductGridPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductGridPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
