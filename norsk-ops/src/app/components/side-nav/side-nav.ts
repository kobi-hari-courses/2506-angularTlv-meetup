import { Component, inject, signal } from '@angular/core';
import { ROUTES_LIST } from '../../tokens/routes-list.token';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [RouterModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss'
})
export class SideNav {
  readonly pages = inject(ROUTES_LIST);


}
