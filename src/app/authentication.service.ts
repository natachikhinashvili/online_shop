import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IsauthorisedService } from './isauthorised.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate, CanActivateChild{
  constructor(private authorisedservice : IsauthorisedService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): any{ 
      this.authorisedservice.isAuthenticated().then((authenticated) => {
        return authenticated ? true : this.router.navigate(['/'])
      })
    }
    canActivateChild(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot) : any{
        return this.canActivate(route,state)
    }
}
