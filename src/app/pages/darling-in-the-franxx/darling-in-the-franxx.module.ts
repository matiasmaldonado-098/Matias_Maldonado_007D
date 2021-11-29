import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarlingInTheFranxxPageRoutingModule } from './darling-in-the-franxx-routing.module';

import { DarlingInTheFranxxPage } from './darling-in-the-franxx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarlingInTheFranxxPageRoutingModule
  ],
  declarations: [DarlingInTheFranxxPage]
})
export class DarlingInTheFranxxPageModule {}
