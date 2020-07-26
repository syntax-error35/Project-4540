import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import {map,switchMap} from 'rxjs/operators';
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
 // logout: any;
 
  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private user:UserService) {
    this.user$=afAuth.authState; 
  }
  login(){
    let returnUrl =this.route.snapshot.queryParamMap.get('returnUrl')  || '/';
    localStorage.setItem('returnUrl',returnUrl);

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); 
  }
logout(){
    this.afAuth.signOut();
   }
   get appUser$(): Observable<AppUser> {
    return this.user$
    .pipe(switchMap(user => {
if(user) return this.user.get(user.uid).valueChanges();
return Observable.of(null);    
}));
   
}

}
