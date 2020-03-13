import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductListPageComponent } from './shop-product-list-page.component';

describe('ShopProductListPageComponent', () => {
  let component: ShopProductListPageComponent;
  let fixture: ComponentFixture<ShopProductListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
