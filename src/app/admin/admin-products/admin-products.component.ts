import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireList,AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{
  products$: Observable<any>;

  constructor(
    private productService: ProductService,
    private db: AngularFireDatabase) { 
    this.products$ = this.productService.getAll();
   }

  ngOnInit(): void {
  }

}
