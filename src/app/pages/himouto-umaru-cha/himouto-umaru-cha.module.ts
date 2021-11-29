import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HimoutoUmaruChaPageRoutingModule } from './himouto-umaru-cha-routing.module';

import { HimoutoUmaruChaPage } from './himouto-umaru-cha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HimoutoUmaruChaPageRoutingModule
  ],
  declarations: [HimoutoUmaruChaPage]
})
export class HimoutoUmaruChaPageModule {}
