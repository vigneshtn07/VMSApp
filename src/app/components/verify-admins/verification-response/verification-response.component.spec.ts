import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationResponseComponent } from './verification-response.component';

describe('VerificationResponseComponent', () => {
  let component: VerificationResponseComponent;
  let fixture: ComponentFixture<VerificationResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
