import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPhaseOneComponent } from './signup-phase-one.component';

describe('SignupPhaseOneComponent', () => {
  let component: SignupPhaseOneComponent;
  let fixture: ComponentFixture<SignupPhaseOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPhaseOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPhaseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
