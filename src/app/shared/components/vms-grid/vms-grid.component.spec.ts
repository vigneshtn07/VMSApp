import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsGridComponent } from './vms-grid.component';

describe('VmsGridComponent', () => {
  let component: VmsGridComponent;
  let fixture: ComponentFixture<VmsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
