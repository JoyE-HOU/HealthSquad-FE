import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageLoginComponent } from './landing-page-login.component';

describe('LandingPageLoginComponent', () => {
  let component: LandingPageLoginComponent;
  let fixture: ComponentFixture<LandingPageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
