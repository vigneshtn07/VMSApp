import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAdminsComponent } from './verify-admins.component';

describe('VerifyAdminsComponent', () => {
  let component: VerifyAdminsComponent;
  let fixture: ComponentFixture<VerifyAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
