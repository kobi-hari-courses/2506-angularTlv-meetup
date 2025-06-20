import { computed, Injectable, signal } from '@angular/core';
import { ALL_USERS } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly #users = signal(ALL_USERS);

  readonly #currentUser = computed(() => this.#users()[0]);
  readonly #otherUsers = computed(() => this.#users().slice(1));

  readonly currentUser = this.#currentUser;
  readonly otherUsers = this.#otherUsers;

  constructor() { }
}
