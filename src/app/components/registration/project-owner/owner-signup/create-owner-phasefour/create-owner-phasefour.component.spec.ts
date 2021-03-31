import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnerPhasefourComponent } from './create-owner-phasefour.component';

describe('CreateOwnerPhasefourComponent', () => {
  let component: CreateOwnerPhasefourComponent;
  let fixture: ComponentFixture<CreateOwnerPhasefourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOwnerPhasefourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnerPhasefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
