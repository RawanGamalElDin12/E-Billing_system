import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAddOfferComponent } from './sp-add-offer.component';

describe('SpAddOfferComponent', () => {
  let component: SpAddOfferComponent;
  let fixture: ComponentFixture<SpAddOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpAddOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpAddOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
