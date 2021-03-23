import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPhaseThreeComponent } from './signup-phase-three.component';

describe('SignupPhaseThreeComponent', () => {
  let component: SignupPhaseThreeComponent;
  let fixture: ComponentFixture<SignupPhaseThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPhaseThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPhaseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
