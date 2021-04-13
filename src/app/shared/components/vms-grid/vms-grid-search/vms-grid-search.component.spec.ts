import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsGridSearchComponent } from './vms-grid-search.component';

describe('VmsGridSearchComponent', () => {
  let component: VmsGridSearchComponent;
  let fixture: ComponentFixture<VmsGridSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsGridSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsGridSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
