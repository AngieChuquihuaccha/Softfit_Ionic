import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeCompraPage } from './mensaje-compra.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeCompraPageRoutingModule {}
