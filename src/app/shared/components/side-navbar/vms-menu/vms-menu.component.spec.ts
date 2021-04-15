import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsMenuComponent } from './vms-menu.component';

describe('VmsMenuComponent', () => {
  let component: VmsMenuComponent;
  let fixture: ComponentFixture<VmsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
