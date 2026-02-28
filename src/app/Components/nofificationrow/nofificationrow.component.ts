import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nofificationrow',
  imports: [],
  templateUrl: './nofificationrow.component.html',
  styleUrl: './nofificationrow.component.css'
})
export class NofificationrowComponent implements OnInit {

  WishMessage: string = "";
  UserFirstName : string ="Kannan";
  UserLastName : string ="Krishnan";
  RoundName :string ="";
  currentDateTime: Date = new Date(); // Initialize as a Date object

  ngOnInit(): void {
    this.currentDateTime = new Date(); // Correctly assigning using 'this'
    
    // Get the current hour
    const currentHour = this.currentDateTime.getHours();
    
    // Set the WishMessage based on the current time of day
    if (currentHour >= 5 && currentHour < 12) {
      this.WishMessage = "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
      this.WishMessage = "Good Afternoon!";
    } else if (currentHour >= 17 && currentHour < 21) {
      this.WishMessage = "Good Evening!";
    } else {
      this.WishMessage = "Good Night!";
    }
       // Get the first letter of both UserFirstName and UserLastName
       const firstLetterFirstName = this.UserFirstName.charAt(0).toUpperCase();
       const firstLetterLastName = this.UserLastName.charAt(0).toUpperCase();
   
       // Set RoundName as the concatenation of both first letters
       this.RoundName = firstLetterFirstName + firstLetterLastName;
  }

}
