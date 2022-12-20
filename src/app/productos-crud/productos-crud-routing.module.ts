import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosCRUDPage } from './productos-crud.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosCRUDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosCRUDPageRoutingModule {}
