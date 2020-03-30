import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingRelatedProducts1Component } from './lick-marketing-related-products1.component';

describe('LickMarketingRelatedProducts1Component', () => {
  let component: LickMarketingRelatedProducts1Component;
  let fixture: ComponentFixture<LickMarketingRelatedProducts1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingRelatedProducts1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingRelatedProducts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
