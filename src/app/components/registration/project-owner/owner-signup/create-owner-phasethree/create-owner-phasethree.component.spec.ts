import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnerPhasethreeComponent } from './create-owner-phasethree.component';

describe('CreateOwnerPhasethreeComponent', () => {
  let component: CreateOwnerPhasethreeComponent;
  let fixture: ComponentFixture<CreateOwnerPhasethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOwnerPhasethreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnerPhasethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
