import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnerResponseComponent } from './create-owner-response.component';

describe('CreateOwnerResponseComponent', () => {
  let component: CreateOwnerResponseComponent;
  let fixture: ComponentFixture<CreateOwnerResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOwnerResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
