import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeriifyComponent } from './veriify.component';

describe('VeriifyComponent', () => {
  let component: VeriifyComponent;
  let fixture: ComponentFixture<VeriifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeriifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeriifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
