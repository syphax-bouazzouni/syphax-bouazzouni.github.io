import { Component, OnInit } from '@angular/core';
import IconLink from "../interfaces/iconLink";

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {
  networks: IconLink[]= [];

  constructor() { }

  ngOnInit(): void {
    this.networks = [
      { name:"GitHub",
        imgSource:"assets/icons/github.svg",
        link:""
      },
      {
        name:"Facebook",
        imgSource:"assets/icons/facebook.svg",
        link:""
      },
      {
        name:"Twitter",
        imgSource:"assets/icons/twitter.svg",
        link:""
      },
      {
        name:"Linkedin",
        imgSource:"assets/icons/linkedin.svg",
        link:""
      },
      {
        name:"Gmail",
        imgSource:"assets/icons/email.svg",
        link:""
      }]

  }

}


