import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingProduct1Component } from './lick-marketing-product1.component';

describe('LickMarketingProduct1Component', () => {
  let component: LickMarketingProduct1Component;
  let fixture: ComponentFixture<LickMarketingProduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingProduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
