import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";

import { reducers } from "./store";

// Import store
import { StoreModule } from "@ngrx/store";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature("products", reducers)
  ],
  declarations: []
})
export class ProductsModule {}
