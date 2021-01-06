import {Component, Input, OnInit} from '@angular/core';
import IconLink from "../interfaces/iconLink";

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.scss']
})
export class IconsListComponent implements OnInit {

  @Input()
  icons:IconLink[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}


