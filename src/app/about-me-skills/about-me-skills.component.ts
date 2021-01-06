import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about-me-skills',
  templateUrl: './about-me-skills.component.html',
  styleUrls: ['./about-me-skills.component.scss']
})
export class AboutMeSkillsComponent implements OnInit {

  skills: Skill[] = []
  constructor() { }

  ngOnInit(): void {
    this.skills = [
      {title:"Programming Language",techs:["Java","PHP","TypeScript","Python","C/C++"]},
      {title:"Backend",techs:["Java Spring","Laravel"]},
      {title:"Frontend",techs:["Angular","Vue","HTML/CSS/SCSS"]},
      {title:"Database & ORM",techs:["SQL Server/Oracle/Postgres/Mysql","MongoDB"," Eloquent/JPA ORM"]},
      {title:"Data integration / Business Intelligence ",techs:["Talend","Pentaho","Jasper report","Tableau"]},
      {title:"Data science",techs:["Scikit-learn","Panda","ML algorithms"]},
      {title:"Systems architecture",techs:["UML","TOGAF/Archimate","BMPN","ER"]},
      {title:"Others",techs:["Git & GitHub","CI/CD","SOAP/REST API","IS security"]},
    ]
  }

}

interface Skill {
    title:String,
    techs:Array<String>
}
