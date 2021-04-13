import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedProgressBarComponent } from './stacked-progress-bar.component';

describe('StackedProgressBarComponent', () => {
  let component: StackedProgressBarComponent;
  let fixture: ComponentFixture<StackedProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
