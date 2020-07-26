import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService, private route: ActivatedRoute,
    private router: Router) {}

login(){
this.auth.login();
}
}
