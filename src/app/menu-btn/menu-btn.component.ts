import {Component, Input, OnInit} from '@angular/core';
import {UrlService} from "../shared/url.service";

@Component({
  selector: 'app-menu-btn',
  templateUrl: './menu-btn.component.html',
  styleUrls: ['./menu-btn.component.scss']
})
export class MenuBtnComponent implements OnInit {

  @Input()
  text:String=""
  @Input()
  direction:"left"|"right"="right"
  @Input()
  route:string=""
  @Input()
  animationDelay:Number=0.2

  constructor() { }

  ngOnInit(): void {
  }


}
