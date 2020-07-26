import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import {AppUser} from './models/app-user';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{
 // userService: any;

  constructor(private auth: AuthService, private user: UserService) { }
  canActivate() : Observable<boolean> {
   return this.auth.appUser$
    .pipe(map(appUser => appUser.isAdmin));
   }
  }
  
//CanActivate(){
//this.auth.user$.map(user => {
//user.displayName
//});
//}
  //}
  
