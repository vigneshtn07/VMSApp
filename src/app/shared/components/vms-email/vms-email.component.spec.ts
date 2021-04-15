import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsEmailComponent } from './vms-email.component';

describe('VmsEmailComponent', () => {
  let component: VmsEmailComponent;
  let fixture: ComponentFixture<VmsEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
