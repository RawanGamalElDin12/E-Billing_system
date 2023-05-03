import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePaidAccountComponent } from './pre-paid-account.component';

describe('PrePaidAccountComponent', () => {
  let component: PrePaidAccountComponent;
  let fixture: ComponentFixture<PrePaidAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrePaidAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePaidAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
