import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [NgClass, FormsModule, NgIf],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  loginemail: string = ''; // Define properties for username and password
  password: string = '';
  IsLoginEnable: boolean = false; // State to track button enable/disable
  buttonName : string ="SignUP"

  updateLoginEnableState(): void {
    // Check if both username and password are filled
    this.IsLoginEnable = this.loginemail.trim() !== '' && this.password.trim() !== '';
    console.log('IsLoginEnable:', this.IsLoginEnable);
  }
  SignUp(): void{
    this.router.navigate(['/dashboard']); 
  }
}


