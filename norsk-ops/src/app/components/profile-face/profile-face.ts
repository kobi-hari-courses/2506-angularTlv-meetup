import { Component, computed, input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile-face',
  imports: [],
  templateUrl: './profile-face.html',
  styleUrl: './profile-face.scss'
})
export class ProfileFace {
  readonly filename = input.required<string>();

}
