import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSourceComponent } from './skill-source.component';

describe('SkillSourceComponent', () => {
  let component: SkillSourceComponent;
  let fixture: ComponentFixture<SkillSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
