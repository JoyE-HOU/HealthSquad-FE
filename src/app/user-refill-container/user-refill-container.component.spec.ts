import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRefillContainerComponent } from './user-refill-container.component';

describe('UserRefillContainerComponent', () => {
  let component: UserRefillContainerComponent;
  let fixture: ComponentFixture<UserRefillContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRefillContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRefillContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
