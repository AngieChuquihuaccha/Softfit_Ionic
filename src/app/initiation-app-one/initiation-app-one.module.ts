import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitiationAppOnePageRoutingModule } from './initiation-app-one-routing.module';

import { InitiationAppOnePage } from './initiation-app-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitiationAppOnePageRoutingModule
  ],
  declarations: [InitiationAppOnePage]
})
export class InitiationAppOnePageModule {}
