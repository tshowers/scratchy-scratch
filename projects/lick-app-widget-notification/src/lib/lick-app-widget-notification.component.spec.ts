import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationComponent } from './lick-app-widget-notification.component';

describe('LickAppWidgetNotificationComponent', () => {
  let component: LickAppWidgetNotificationComponent;
  let fixture: ComponentFixture<LickAppWidgetNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
