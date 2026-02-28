import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
  TotalIncome: string ="No Income";
  TotalExpencses:string ="No Income";
  ToatalTransaction:string="0";
  Balance:number =0;

  ngOnInit(): void {
    this.ToatalTransaction = "135";
    this.TotalIncome ="130005";
    this.TotalExpencses ="13005";
    // Convert TotalIncome and TotalExpecses to numbers and calculate Balance
    this.Balance = +this.TotalIncome - +this.TotalExpencses; // Use '+' to convert string to number
  }

}
