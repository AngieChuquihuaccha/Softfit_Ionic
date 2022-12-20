import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitiationAppPageRoutingModule } from './initiation-app-routing.module';

import { InitiationAppPage } from './initiation-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitiationAppPageRoutingModule
  ],
  declarations: [InitiationAppPage]
})
export class InitiationAppPageModule {}
