import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { SideNav } from "./components/side-nav/side-nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'norsk-ops';
}
