import { Component, inject } from '@angular/core';
import { ProfileFace } from "../profile-face/profile-face";
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-user-profile',
  imports: [ProfileFace],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {
  readonly user = inject(DataService).currentUser;
}
