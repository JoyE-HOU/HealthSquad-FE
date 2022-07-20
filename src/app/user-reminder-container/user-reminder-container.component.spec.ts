import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReminderContainerComponent } from './user-reminder-container.component';

describe('UserReminderContainerComponent', () => {
  let component: UserReminderContainerComponent;
  let fixture: ComponentFixture<UserReminderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReminderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReminderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
