import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsMenuItemComponent } from './vms-menu-item.component';

describe('VmsMenuItemComponent', () => {
  let component: VmsMenuItemComponent;
  let fixture: ComponentFixture<VmsMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
