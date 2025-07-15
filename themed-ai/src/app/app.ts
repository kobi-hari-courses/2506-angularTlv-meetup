import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [RouterModule],
  standalone: true,
})
export class App {
  navItems = signal([
    { path: 'home', label: 'Home', icon: 'home' },
    { path: 'support', label: 'Support Chat', icon: 'support_agent' },
    { path: 'sales', label: 'Sales Chat', icon: 'storefront' },
    { path: 'playground', label: 'Playground', icon: 'code' },
  ]);
}
