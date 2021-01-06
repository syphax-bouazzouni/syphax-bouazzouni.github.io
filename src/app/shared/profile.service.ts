import { Injectable } from '@angular/core';
import Profile from "../interfaces/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _PROFILE:Profile = {
    name:'Syphax Bouazzouni',
    jobs:['Student ', 'Developer' ,'Freelancer'],
    description:'Help others in there IT needs',
    profileImgSource:'assets/profile-picture.jpg',
  }
  constructor() { }

  get profile(){
    return this._PROFILE
  }
}



