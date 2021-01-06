import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private _previousUrl: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public previousUrl$: Observable<string> = this._previousUrl.asObservable();
  constructor() { }

  setPreviousUrl(previousUrl: string) {
    this._previousUrl.next(previousUrl);
  }

  get previousUrl():string{
    let p:string="";
    this.previousUrl$.subscribe((previousUrl:string) => p = previousUrl);
    return p
  }
}
