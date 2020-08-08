import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from "./shopping-cart/ShoppingCartComponent";
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
  {path :'',component: HomeComponent},
  {path :'products',component: ProductComponent},
  {path :'shopping-cart', component: ShoppingCartComponent},
  {path :'login',component: LoginComponent},

  {path :'check-out', component: CheckOutComponent, canActivate : [AuthGuardService]},
  {path :'order-success',component: OrderSuccessComponent, canActivate : [AuthGuardService]},
  {path :'my-orders',component: MyOrdersComponent, canActivate : [AuthGuardService]},

  {
    path :'admin/product',
    component: AdminProductsComponent,  
    canActivate : [AuthGuardService,AdminAuthGuardService]
  },
  {
    path :'admin/product/new',
    component: ProductFormComponent,  
    canActivate : [AuthGuardService,AdminAuthGuardService]
  },
  {
    path :'admin/order',
    component: AdminOrdersComponent, 
    canActivate : [AuthGuardService, AdminAuthGuardService]
  }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 