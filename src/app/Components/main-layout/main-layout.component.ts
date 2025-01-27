import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-main-layout',
  imports: [FontAwesomeModule,RouterOutlet,LoginComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  title ='';
  faDashboard = faDashboard;
  faTable = faTable;
  faPiggyBank=faPiggyBank;
  faStar=faStar;
  faSignOut=faSignOut;
  faHandHoldingDollar =faHandHoldingDollar;
}
