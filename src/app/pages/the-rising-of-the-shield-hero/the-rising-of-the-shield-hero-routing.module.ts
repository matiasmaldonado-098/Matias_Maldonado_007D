import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheRisingOfTheShieldHeroPage } from './the-rising-of-the-shield-hero.page';

const routes: Routes = [
  {
    path: '',
    component: TheRisingOfTheShieldHeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheRisingOfTheShieldHeroPageRoutingModule {}
