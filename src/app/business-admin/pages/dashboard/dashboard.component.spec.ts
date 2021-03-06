import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BADashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: BADashboardComponent;
  let fixture: ComponentFixture<BADashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BADashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BADashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
