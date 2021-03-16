import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthWizardComponent } from './user-auth-wizard.component';

describe('UserAuthWizardComponent', () => {
  let component: UserAuthWizardComponent;
  let fixture: ComponentFixture<UserAuthWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAuthWizardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
