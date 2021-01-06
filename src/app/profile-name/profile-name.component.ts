import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-name',
  templateUrl: './profile-name.component.html',
  styleUrls: ['./profile-name.component.scss']
})
export class ProfileNameComponent implements OnInit {

  @Input()
  name:String=""

  constructor() { }

  ngOnInit(): void {
  }

}
