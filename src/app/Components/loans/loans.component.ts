import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  imports: [CommonModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {

   // Array to hold loan details
   loans = [
    {
      loanName: 'Car Loan',
      loanAmount: 100000,
      loanEndDate: '2025-12-12',
      settledAmount: 30000,
      remainingAmount: 70000,
      remainingDate: '2025-12-12'
    },
    {
      loanName: 'Bike Loan',
      loanAmount: 50000,
      loanEndDate: '2024-11-30',
      settledAmount: 25000,
      remainingAmount: 25000,
      remainingDate: '2024-11-30'
    },
    {
      loanName: 'Home Loan',
      loanAmount: 1000000,
      loanEndDate: '2030-12-12',
      settledAmount: 50000,
      remainingAmount: 950000,
      remainingDate: '2030-12-12'
    },
    {
      loanName: 'Personal Loan',
      loanAmount: 200000,
      loanEndDate: '2026-05-20',
      settledAmount: 100000,
      remainingAmount: 100000,
      remainingDate: '2026-05-20'
    }
  ];

  // Array to hold light colors for card backgrounds
  lightColors = ['#4caf50', '#2196f3', '#ff9800', '#9c27b0'];

  // Function to group loans into pairs
  groupLoans() {
    const grouped = [];
    for (let i = 0; i < this.loans.length; i += 2) {
      grouped.push(this.loans.slice(i, i + 2)); // Slice two loans at a time
    }
    return grouped;
  }

  getRemainingPercentage(loan: any): number {
    // Calculate percentage based on remaining amount
    return (loan.remainingAmount / loan.loanAmount) * 100;
  }
}
