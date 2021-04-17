import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadminRegistrationComponent } from './badmin-registration.component';

describe('BadminRegistrationComponent', () => {
  let component: BadminRegistrationComponent;
  let fixture: ComponentFixture<BadminRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadminRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
