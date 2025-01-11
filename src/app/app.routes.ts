import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },  // Default route
    { path: 'dashboard', component: DashboardComponent },
    {path : 'userRegistration',component:RegistrationComponent}
];
