import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitiationAppPage } from './initiation-app.page';

const routes: Routes = [
  {
    path: '',
    component: InitiationAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitiationAppPageRoutingModule {}
