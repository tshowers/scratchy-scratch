import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetDropBoxComponent } from './lick-app-widget-drop-box.component';

describe('LickAppWidgetDropBoxComponent', () => {
  let component: LickAppWidgetDropBoxComponent;
  let fixture: ComponentFixture<LickAppWidgetDropBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetDropBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetDropBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
