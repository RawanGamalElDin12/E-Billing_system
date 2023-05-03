import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPaidAccountComponent } from './post-paid-account.component';

describe('PostPaidAccountComponent', () => {
  let component: PostPaidAccountComponent;
  let fixture: ComponentFixture<PostPaidAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPaidAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPaidAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
