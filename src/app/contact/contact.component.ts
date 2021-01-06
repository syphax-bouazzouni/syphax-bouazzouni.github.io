import { Component, OnInit } from '@angular/core';
import IconLink from "../interfaces/iconLink";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mail:IconLink = {} as IconLink
  freelanceSites:IconLink[]=[];
  github:IconLink= {} as IconLink;
  networks:IconLink[]=[];
  constructor() {

  }

  ngOnInit(): void {
    this.mail = {
      name: "Gmail",
      imgSource: "assets/icons/email.svg",
      link: "mailto:gs_bouazzouni@esi.dz"
    }

    this.github = {
      name: "GitHub",
      imgSource: "assets/icons/github.svg",
      link: "https://github.com/syphax-bouazzouni"
    }

    this.freelanceSites = [{
      name: "Fiverr",
      imgSource: "assets/icons/fiverr.png",
      link: "https://www.fiverr.com/b_syphax"
    },
      {
        name: "Malt",
        imgSource: "assets/icons/malt.png",
        link: "https://www.malt.fr/profile/syphaxbouazzouni"
      },
      {
        name: "Freehali",
        imgSource: "assets/icons/freehali.png",
        link: "https://www.freehali.com/author/syphaxbouazzouni/"
      }]

    this.networks=[
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
      }
    ]

  }




}
