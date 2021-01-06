import {trigger} from "@angular/animations";
import {slideInLeft} from "./slide-animations/slide-in-left";
import {slideInRight} from "./slide-animations/slide-in-right";
import {slideInTop} from "./slide-animations/slide-in-top";


export const  pageChangeAnimation = trigger('routerTransition',
  [slideInLeft,slideInRight,slideInTop])

