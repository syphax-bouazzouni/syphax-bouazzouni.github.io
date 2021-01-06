import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from "../shared/profile.service";

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  @Input()
  name: string
  @Input()
  imgSource: string
  @Input()
  height: string="140px"
  @Input()
  width:string="140px"
  @Input()
  borderWidth:string="0.8rem"

  constructor(private profileService:ProfileService) {
      this.name = profileService.profile.name
      this.imgSource = profileService.profile.profileImgSource
  }

  ngOnInit(): void {
  }

}
