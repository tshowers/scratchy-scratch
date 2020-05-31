import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetGenericNavComponent } from './lick-app-widget-generic-nav.component';

describe('LickAppWidgetGenericNavComponent', () => {
  let component: LickAppWidgetGenericNavComponent;
  let fixture: ComponentFixture<LickAppWidgetGenericNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetGenericNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetGenericNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
