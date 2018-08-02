import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// Third party
import { AgGridModule } from "ag-grid-angular";

// Store
import { effects, reducers } from "./store";
// import { effects } from "./store";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// Routing
import { ProductsRoutingModule } from "./products-routing.module";

// Services
import { services } from "../products/services";

// Components
import { ProductsComponent } from "./containers/products/products.component";
import { ProductItemComponent } from "./containers/product-item/product-item.component";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects),
    AgGridModule.withComponents([])
  ],
  providers: [...services],
  declarations: [ProductsComponent, ProductItemComponent],
  exports: [ProductsComponent, ProductItemComponent]
})
export class ProductsModule {}
