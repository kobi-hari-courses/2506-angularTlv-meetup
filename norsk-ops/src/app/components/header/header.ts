import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { SearchBox } from "../search-box/search-box";
import { UserProfile } from "../user/user-profile";

@Component({
  selector: 'app-header',
  imports: [Logo, SearchBox, UserProfile],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
