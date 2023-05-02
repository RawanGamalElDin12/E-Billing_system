import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangeOfferComponent } from './admin-change-offer.component';

describe('AdminChangeOfferComponent', () => {
  let component: AdminChangeOfferComponent;
  let fixture: ComponentFixture<AdminChangeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChangeOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChangeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
