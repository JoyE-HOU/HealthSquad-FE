import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageSignupComponent } from './landing-page-signup.component';

describe('LandingPageSignupComponent', () => {
  let component: LandingPageSignupComponent;
  let fixture: ComponentFixture<LandingPageSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
