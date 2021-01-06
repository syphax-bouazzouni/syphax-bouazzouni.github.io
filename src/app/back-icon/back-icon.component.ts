import {Component, HostListener, OnInit} from '@angular/core';
import {UrlService} from "../shared/url.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-back-icon',
  templateUrl: './back-icon.component.html',
  styleUrls: ['./back-icon.component.scss']
})
export class BackIconComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private _urlService :UrlService,private router:Router) { }

  @HostListener('click')
  onClick() {
    let p = this._urlService.previousUrl
    console.log("go to: "+p)
    this.router.navigateByUrl(p);

  }

}
