import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSpComponent } from './admin-add-sp.component';

describe('AdminAddSpComponent', () => {
  let component: AdminAddSpComponent;
  let fixture: ComponentFixture<AdminAddSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
