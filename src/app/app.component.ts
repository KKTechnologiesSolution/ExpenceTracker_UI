import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoginComponent],
    template: '<router-outlet></router-outlet>',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TrackExpence';
}
