import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprovidersPostPaidComponent } from './serviceproviders-post-paid.component';

describe('ServiceprovidersPostPaidComponent', () => {
  let component: ServiceprovidersPostPaidComponent;
  let fixture: ComponentFixture<ServiceprovidersPostPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceprovidersPostPaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceprovidersPostPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
