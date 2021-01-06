import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-typing-text',
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.scss']
})
export class TypingTextComponent implements OnInit {


  _textToDisplay:string="";

  textDisplayed: string="";

  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this)
  }

  typingCallback(that:TypingTextComponent) {
    let total_length = that.textToDisplay.length;
    let current_length = that.textDisplayed.length;
    if (current_length < total_length) {
      that.textDisplayed += that.textToDisplay[current_length];
      setTimeout(that.typingCallback, 50, that);
    }
  }

  @Input()
  set textToDisplay(value:string){
      this._textToDisplay = value;
      this.textDisplayed =""
      this.typingCallback(this)
  }

  get textToDisplay(){
    return this._textToDisplay
  }
}
