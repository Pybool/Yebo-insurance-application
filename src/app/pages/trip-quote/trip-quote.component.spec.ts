import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripQuoteComponent } from './trip-quote.component';

describe('TripQuoteComponent', () => {
  let component: TripQuoteComponent;
  let fixture: ComponentFixture<TripQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripQuoteComponent]
    });
    fixture = TestBed.createComponent(TripQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
