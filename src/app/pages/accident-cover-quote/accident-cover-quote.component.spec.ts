import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCoverQuoteComponent } from './accident-cover-quote.component';

describe('AccidentCoverQuoteComponent', () => {
  let component: AccidentCoverQuoteComponent;
  let fixture: ComponentFixture<AccidentCoverQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccidentCoverQuoteComponent]
    });
    fixture = TestBed.createComponent(AccidentCoverQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
