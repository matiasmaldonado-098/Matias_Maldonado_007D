import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritodecompraPageRoutingModule } from './carritodecompra-routing.module';

import { CarritodecompraPage } from './carritodecompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritodecompraPageRoutingModule
  ],
  declarations: [CarritodecompraPage]
})
export class CarritodecompraPageModule {}
