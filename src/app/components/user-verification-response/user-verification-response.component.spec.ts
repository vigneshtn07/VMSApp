import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerificationResponseComponent } from './user-verification-response.component';

describe('UserVerificationResponseComponent', () => {
  let component: UserVerificationResponseComponent;
  let fixture: ComponentFixture<UserVerificationResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVerificationResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVerificationResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
