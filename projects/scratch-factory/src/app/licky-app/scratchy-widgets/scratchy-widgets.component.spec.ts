import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchyWidgetsComponent } from './scratchy-widgets.component';

describe('ScratchyWidgetsComponent', () => {
  let component: ScratchyWidgetsComponent;
  let fixture: ComponentFixture<ScratchyWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratchyWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchyWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
