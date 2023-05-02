import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceProvidersComponent } from './admin-service-providers.component';

describe('AdminServiceProvidersComponent', () => {
  let component: AdminServiceProvidersComponent;
  let fixture: ComponentFixture<AdminServiceProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceProvidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
