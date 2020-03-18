import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetProductGridComponent } from './lick-app-widget-product-grid.component';

describe('LickAppWidgetProductGridComponent', () => {
  let component: LickAppWidgetProductGridComponent;
  let fixture: ComponentFixture<LickAppWidgetProductGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetProductGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
