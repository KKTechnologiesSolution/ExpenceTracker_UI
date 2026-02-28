import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalListSectionComponent } from './goal-list-section.component';

describe('GoalListSectionComponent', () => {
  let component: GoalListSectionComponent;
  let fixture: ComponentFixture<GoalListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalListSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
