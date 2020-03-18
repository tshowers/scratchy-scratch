import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetProductSearchByTagComponent } from './lick-app-widget-product-search-by-tag.component';

describe('LickAppWidgetProductSearchByTagComponent', () => {
  let component: LickAppWidgetProductSearchByTagComponent;
  let fixture: ComponentFixture<LickAppWidgetProductSearchByTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetProductSearchByTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetProductSearchByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
