import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SavingPlanTableComponent } from './Components/saving-plan-table/saving-plan-table.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { FullTrasactionComponent } from './Components/full-trasaction/full-trasaction.component';
import { GoalsComponent } from './Components/goals/goals.component';
import { LoansComponent } from './Components/loans/loans.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },  // Default route for login
  {
    path: 'main-layout',
    component: MainLayoutComponent, // Layout contains Sidenav
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Default child for dashboard
      { path: 'full-trasaction', component: FullTrasactionComponent },
      { path: 'saving-plan-table', component: SavingPlanTableComponent },
      { path: 'goals', component: GoalsComponent },
      { path: 'loans', component: LoansComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect any unknown paths to login
];
