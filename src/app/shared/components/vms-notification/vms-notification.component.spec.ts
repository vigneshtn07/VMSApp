import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsNotificationComponent } from './vms-notification.component';

describe('VmsNotificationComponent', () => {
  let component: VmsNotificationComponent;
  let fixture: ComponentFixture<VmsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
