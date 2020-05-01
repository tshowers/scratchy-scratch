import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOneComponent } from './help-one.component';

describe('HelpOneComponent', () => {
  let component: HelpOneComponent;
  let fixture: ComponentFixture<HelpOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
