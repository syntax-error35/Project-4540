import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
  export class ProductFormComponent {
  categories$: Observable<any[]>;

  constructor(
    categoryService: CategoryService,
    private db: AngularFireDatabase
  ) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

}
