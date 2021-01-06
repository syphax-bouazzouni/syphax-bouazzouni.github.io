import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-work-skills',
  templateUrl: './work-skills.component.html',
  styleUrls: ['./work-skills.component.scss']
})
export class WorkSkillsComponent implements OnInit {

  skills:Skill[]
  @Output()
  skillSelected:EventEmitter<Skill> = new EventEmitter<Skill>()

  constructor() {
    this.skills=[
      {name:"Angular",disabled:false},
      {name:"React",disabled:false},
      {name:"Node",disabled:false},
      {name:"ASP.NET",disabled:false},
    ]
  }

  ngOnInit(): void {
  }

  onClick(event){
    let selected:Skill= {} as Skill;
    this.skills=this.skills.map((s)=>{
      if(s.name==event.target.innerHTML.trim()){
        selected = s
        return {
          ...s,
          disabled:!s.disabled
        }
      }
      else
        return s
    })
    this.skillSelected.emit(selected)
  }
}

interface Skill{
  name:string,
  disabled:boolean
}
