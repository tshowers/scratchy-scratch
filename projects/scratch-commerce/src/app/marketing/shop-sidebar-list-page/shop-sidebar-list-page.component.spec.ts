import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSidebarListPageComponent } from './shop-sidebar-list-page.component';

describe('ShopSidebarListPageComponent', () => {
  let component: ShopSidebarListPageComponent;
  let fixture: ComponentFixture<ShopSidebarListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSidebarListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSidebarListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
