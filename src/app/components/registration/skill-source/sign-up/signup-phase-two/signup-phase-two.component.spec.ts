import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPhaseTwoComponent } from './signup-phase-two.component';

describe('SignupPhaseTwoComponent', () => {
  let component: SignupPhaseTwoComponent;
  let fixture: ComponentFixture<SignupPhaseTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPhaseTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPhaseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
