import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAndUpdateUserComponent } from './view-and-update-user.component';

describe('ViewAndUpdateUserComponent', () => {
  let component: ViewAndUpdateUserComponent;
  let fixture: ComponentFixture<ViewAndUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAndUpdateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAndUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
