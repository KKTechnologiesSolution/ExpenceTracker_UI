import { Component } from '@angular/core';
import { GoalListSectionComponent } from './goal-list-section/goal-list-section.component';
import { InputRowGoalComponent } from './input-row-goal/input-row-goal.component';

@Component({
  selector: 'app-goals',
  imports: [GoalListSectionComponent,InputRowGoalComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {

}
