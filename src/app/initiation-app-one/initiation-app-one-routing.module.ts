import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitiationAppOnePage } from './initiation-app-one.page';

const routes: Routes = [
  {
    path: '',
    component: InitiationAppOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitiationAppOnePageRoutingModule {}
