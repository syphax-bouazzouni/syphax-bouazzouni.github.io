import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from "../shared/profile.service";
import Profile from "../interfaces/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  profile:Profile

  constructor(private profileService:ProfileService) {
    this.profile = profileService.profile
  }

  ngOnInit(): void {
  }

}
