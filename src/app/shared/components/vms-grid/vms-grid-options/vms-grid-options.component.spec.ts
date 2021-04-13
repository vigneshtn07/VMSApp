import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsGridOptionsComponent } from './vms-grid-options.component';

describe('VmsGridOptionsComponent', () => {
  let component: VmsGridOptionsComponent;
  let fixture: ComponentFixture<VmsGridOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsGridOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsGridOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
