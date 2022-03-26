import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsauthorisedService {

  LoggedIn = false
  
  constructor() { }

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(()=>{
          resolve(this.LoggedIn)
        }, 800)
      }
    )
    return promise
  }

  login(){
    this.LoggedIn = true
  }

  logout(){
    this.LoggedIn = false
  }
}
