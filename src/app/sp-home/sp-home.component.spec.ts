import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpHomeComponent } from './sp-home.component';

describe('SpHomeComponent', () => {
  let component: SpHomeComponent;
  let fixture: ComponentFixture<SpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
