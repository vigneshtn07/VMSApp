import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnerPhaseoneComponent } from './create-owner-phaseone.component';

describe('CreateOwnerPhaseoneComponent', () => {
  let component: CreateOwnerPhaseoneComponent;
  let fixture: ComponentFixture<CreateOwnerPhaseoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOwnerPhaseoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnerPhaseoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
