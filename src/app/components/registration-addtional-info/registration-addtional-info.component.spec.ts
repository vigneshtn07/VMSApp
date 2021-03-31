import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAddtionalInfoComponent } from './registration-addtional-info.component';

describe('RegistrationAddtionalInfoComponent', () => {
  let component: RegistrationAddtionalInfoComponent;
  let fixture: ComponentFixture<RegistrationAddtionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationAddtionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAddtionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
