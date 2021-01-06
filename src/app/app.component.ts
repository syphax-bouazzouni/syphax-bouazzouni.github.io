import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent, RouterOutlet} from "@angular/router";
import {UrlService} from "./shared/url.service";
import {filter} from "rxjs/operators";
import {pageChangeAnimation} from "./animations/page-change-animation";


@Component({
  selector: 'app-root',
  animations: [pageChangeAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  private currentUrl: string="";
  private previousUrl: string="";

  constructor(private router: Router,
              private urlService: UrlService) {
  }
  triggerAnimation(outlet: RouterOutlet) {
      return outlet.activatedRouteData.animation || null;
  }

  ngOnInit(): void {
      this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
      ).subscribe((e)=>{
        let event  = e as RouterEvent
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        this.urlService.setPreviousUrl(this.previousUrl);
      });
  }

}
