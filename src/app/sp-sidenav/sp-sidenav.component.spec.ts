import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpSidenavComponent } from './sp-sidenav.component';

describe('SpSidenavComponent', () => {
  let component: SpSidenavComponent;
  let fixture: ComponentFixture<SpSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
