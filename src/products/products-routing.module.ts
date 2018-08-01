import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./containers/products/products.component";
import { ProductItemComponent } from "./containers/product-item/product-item.component";

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent,
  },
  {
    path: ":id",
    component: ProductItemComponent,
  },
  {
    path: "new",
    component: ProductItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
