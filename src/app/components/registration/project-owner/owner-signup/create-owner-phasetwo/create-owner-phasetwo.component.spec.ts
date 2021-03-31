import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnerPhasetwoComponent } from './create-owner-phasetwo.component';

describe('CreateOwnerPhasetwoComponent', () => {
  let component: CreateOwnerPhasetwoComponent;
  let fixture: ComponentFixture<CreateOwnerPhasetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOwnerPhasetwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnerPhasetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
