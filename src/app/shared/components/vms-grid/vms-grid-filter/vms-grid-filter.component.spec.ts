import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsGridFilterComponent } from './vms-grid-filter.component';

describe('VmsGridFilterComponent', () => {
  let component: VmsGridFilterComponent;
  let fixture: ComponentFixture<VmsGridFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsGridFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsGridFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
