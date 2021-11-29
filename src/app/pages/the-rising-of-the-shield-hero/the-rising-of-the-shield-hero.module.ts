import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheRisingOfTheShieldHeroPageRoutingModule } from './the-rising-of-the-shield-hero-routing.module';

import { TheRisingOfTheShieldHeroPage } from './the-rising-of-the-shield-hero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheRisingOfTheShieldHeroPageRoutingModule
  ],
  declarations: [TheRisingOfTheShieldHeroPage]
})
export class TheRisingOfTheShieldHeroPageModule {}
