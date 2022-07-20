import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrescriptionContainerComponent } from './user-prescription-container.component';

describe('UserPrescriptionContainerComponent', () => {
  let component: UserPrescriptionContainerComponent;
  let fixture: ComponentFixture<UserPrescriptionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPrescriptionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPrescriptionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
