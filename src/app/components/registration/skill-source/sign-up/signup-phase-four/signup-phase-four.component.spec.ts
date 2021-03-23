import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPhaseFourComponent } from './signup-phase-four.component';

describe('SignupPhaseFourComponent', () => {
  let component: SignupPhaseFourComponent;
  let fixture: ComponentFixture<SignupPhaseFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPhaseFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPhaseFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
