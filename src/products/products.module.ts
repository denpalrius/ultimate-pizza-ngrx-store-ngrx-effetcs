import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsRoutingModule } from "./products-routing.module";
import { AgGridModule } from "ag-grid-angular";
import { reducers } from "./store";

// Import store
import { StoreModule } from "@ngrx/store";
import { ProductsComponent } from "./containers/products/products.component";
import { ProductItemComponent } from "./containers/product-item/product-item.component";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature("products", reducers),
    AgGridModule.withComponents([])
  ],
  declarations: [ProductsComponent, ProductItemComponent]
})
export class ProductsModule {}
