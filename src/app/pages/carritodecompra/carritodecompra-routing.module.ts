import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritodecompraPage } from './carritodecompra.page';

const routes: Routes = [
  {
    path: '',
    component: CarritodecompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritodecompraPageRoutingModule {}
