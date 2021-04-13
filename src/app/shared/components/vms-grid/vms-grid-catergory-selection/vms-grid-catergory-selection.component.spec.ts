import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsGridCatergorySelectionComponent } from './vms-grid-catergory-selection.component';

describe('VmsGridCatergorySelectionComponent', () => {
  let component: VmsGridCatergorySelectionComponent;
  let fixture: ComponentFixture<VmsGridCatergorySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsGridCatergorySelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsGridCatergorySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
