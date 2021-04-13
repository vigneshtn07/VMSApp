import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsGridTableComponent } from './vms-grid-table.component';

describe('VmsGridTableComponent', () => {
  let component: VmsGridTableComponent;
  let fixture: ComponentFixture<VmsGridTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsGridTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsGridTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
