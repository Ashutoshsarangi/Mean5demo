import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGateWayComponent } from './payment-gate-way.component';

describe('PaymentGateWayComponent', () => {
  let component: PaymentGateWayComponent;
  let fixture: ComponentFixture<PaymentGateWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentGateWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGateWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
