import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetSectionEditComponent } from './lick-app-widget-section-edit.component';

describe('LickAppWidgetSectionEditComponent', () => {
  let component: LickAppWidgetSectionEditComponent;
  let fixture: ComponentFixture<LickAppWidgetSectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetSectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetSectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
