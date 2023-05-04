import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpChangeOfferComponent } from './sp-change-offer.component';

describe('SpChangeOfferComponent', () => {
  let component: SpChangeOfferComponent;
  let fixture: ComponentFixture<SpChangeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpChangeOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpChangeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
