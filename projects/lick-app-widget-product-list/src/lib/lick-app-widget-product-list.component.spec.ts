import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetProductListComponent } from './lick-app-widget-product-list.component';

describe('LickAppWidgetProductListComponent', () => {
  let component: LickAppWidgetProductListComponent;
  let fixture: ComponentFixture<LickAppWidgetProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
