import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeQuoteComponent } from './life-quote.component';

describe('LifeQuoteComponent', () => {
  let component: LifeQuoteComponent;
  let fixture: ComponentFixture<LifeQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeQuoteComponent]
    });
    fixture = TestBed.createComponent(LifeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
