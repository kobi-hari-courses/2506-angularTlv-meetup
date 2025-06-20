import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { SideNav } from "./components/side-nav/side-nav";
import { DataService } from './services/data-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly data = inject(DataService);

  readonly user = this.data.currentUser;

}
