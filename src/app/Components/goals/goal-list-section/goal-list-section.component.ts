import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-goal-list-section',
  templateUrl: './goal-list-section.component.html',
  styleUrls: ['./goal-list-section.component.css'],
  imports:[CommonModule]
})
export class GoalListSectionComponent {

  // Collection of goal data (example)
  goals = [
    { name: 'Buy a Car', amount: '₹10,00,000', saved: '₹4,00,000', remaining: '₹6,00,000', endDate: '31 Dec 2025', progress: 90 },
    { name: 'Buy a House', amount: '₹50,00,000', saved: '₹15,00,000', remaining: '₹35,00,000', endDate: '30 Dec 2025', progress: 30 },
    { name: 'Vacation Fund', amount: '₹5,00,000', saved: '₹2,00,000', remaining: '₹3,00,000', endDate: '31 Dec 2024', progress: 40 }
  ];

  // Collection of colors
  colors = [
    "#4caf50", // Green
    "#ff5722", // Orange
    "#2196f3", // Blue
    "#9c27b0", // Purple
    "#f44336"  // Red
  ];

  // Method to get a random color
  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }

}
