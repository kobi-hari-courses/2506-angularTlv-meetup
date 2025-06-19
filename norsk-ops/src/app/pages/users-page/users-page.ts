import { Component, inject } from '@angular/core';
import { USERS_TOKEN } from '../../tokens/users.token';
import { SelectButton } from "../../components/select-button/select-button";

@Component({
  selector: 'app-users-page',
  imports: [SelectButton],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss'
})
export class UsersPage {
  readonly users = inject(USERS_TOKEN);

}
