import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSpComponent } from './admin-view-sp.component';

describe('AdminViewSpComponent', () => {
  let component: AdminViewSpComponent;
  let fixture: ComponentFixture<AdminViewSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewSpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
