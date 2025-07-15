import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [RouterModule, FormsModule],
  standalone: true,
  host: {
    '[style.--selected-color]': 'selectedColor()',
  }
})
export class App {
  readonly selectedColor = signal('#2196f3');

  navItems = signal([
    { path: 'home', label: 'Home', icon: 'home' },
    { path: 'support', label: 'Support Chat', icon: 'support_agent' },
    { path: 'sales', label: 'Sales Chat', icon: 'storefront' },
    { path: 'playground', label: 'Playground', icon: 'code' },
  ]);
}
