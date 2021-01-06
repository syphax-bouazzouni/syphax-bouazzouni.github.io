import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  @ViewChild('worksInformation',{read: ElementRef, static:true})
  worksInformation:ElementRef ={} as ElementRef;


  borderWidth:string = "0.3rem"

  MAX_WIDTH:number=120
  MAX_HEIGHT:number=120



  width:string = this.MAX_WIDTH+"px"
  height:string = this.MAX_HEIGHT+"px"

  headerFixed:Boolean=false;
  textToDisplay: string = "🙋 Hey, sort my projects by clicking the categories.  "

  constructor() {

  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onScroll() {
    const worksInformationHeight  = this.worksInformation.nativeElement.offsetHeight+
      this.worksInformation.nativeElement.offsetTop

    if(window.scrollY<=worksInformationHeight){
      let worksInformationVisibility = 1 - ( window.scrollY/worksInformationHeight)
      this.width = this.MAX_WIDTH * worksInformationVisibility + "px";
      this.height = this.MAX_HEIGHT * worksInformationVisibility + "px"

      this.worksInformation.nativeElement.style.opacity = worksInformationVisibility
      this.headerFixed = false
    }else {
      this.headerFixed = true
    }
  }

  @HostListener('skillSelected')
  onSkillSelected(skill:any){
    const text = "Great! Have a great day! 😊 "
    if(this.textToDisplay!=text)
      this.textToDisplay  = text

    console.log(this.textToDisplay)
  }


}
