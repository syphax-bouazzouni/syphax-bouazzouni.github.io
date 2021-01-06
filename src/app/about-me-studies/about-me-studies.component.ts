import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-me-studies',
  templateUrl: './about-me-studies.component.html',
  styleUrls: ['./about-me-studies.component.scss']
})
export class AboutMeStudiesComponent implements OnInit {

  studies:Study[]=[];
  constructor() { }

  ngOnInit(): void {
      this.studies=[
        {startDay:new Date(2016,8),
          endDate:new Date(2018,5),
          logoSrc:"assets/esi-sba-logo.png",
          title:"Ingenieur d'informatique",
          fullName:"École supérieure en informatique de Sidi Bel Abbès",
          name:"ESI-SBA",
          link:"https://www.esi-sba.dz/fr/",
          address:"Algerie,Sidi bel abbès",badges:["Major de promotion"]
        },
        {startDay:new Date(2018,8),
          endDate:new Date(2021,0),
          logoSrc:"assets/esi-logo.png",
          title:"Ingenieur d'informatique",
          fullName:"Ecole Nationale Supérieure d'Informatique",
          name:"ESI",
          link:"http://esi.dz/",
          address:"Algerie,Alger",badges:["Major de promotion"]
        }
      ]
  }

}


interface Study {
  startDay:Date,
  endDate:Date,
  logoSrc:String,
  title:String,
  name:String,
  fullName:String,
  link:String,
  address:String,
  badges:String[]
}
