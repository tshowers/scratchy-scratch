import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetProductCategoriesComponent } from './lick-app-widget-product-categories.component';

describe('LickAppWidgetProductCategoriesComponent', () => {
  let component: LickAppWidgetProductCategoriesComponent;
  let fixture: ComponentFixture<LickAppWidgetProductCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetProductCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
