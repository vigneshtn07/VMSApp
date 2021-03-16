import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMSDialogModalComponent } from './vms-dialog-modal.component';

describe('VMSDialogModalComponent', () => {
  let component: VMSDialogModalComponent;
  let fixture: ComponentFixture<VMSDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMSDialogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VMSDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
