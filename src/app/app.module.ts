//err :Cannot find module 'rxjs-compat/Observable'
// sol : npm install --save rxjs-compat

// err
//ERROR in src/app/app.module.ts:1:10 - error TS2300: Duplicate identifier 'environment'.
//1 import { environment } from './../environments/environment';
//src/app/app.module.ts:11:10 - error TS2300: Duplicate identifier 'environment'.
// sol :  
//comment out : import { environment } from './../environments/environment';

//ERROR in src/app/app.module.ts:13:34 - error TS2307: Cannot find module '@angularfire2' or its corresponding type declarations.
// uninstall the dependencies from angularfire2, also firebase if you have installed using version 4.x
//npm uninstall angularfire2 --save
//npm uninstall firebase --save
//then install @angular/fire with firebase.
//npm i firebase @angular/fire --save

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ AngularFireModule } from '@angular/fire';
import{ AngularFireDatabaseModule } from '@angular/fire/database';
import{ AngularFireAuthModule} from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from "./shopping-cart/ShoppingCartComponent";
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {UserService} from './user.service';
import {AdminAuthGuardService} from './admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers:  [
    AuthService,AuthGuardService,UserService,AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
