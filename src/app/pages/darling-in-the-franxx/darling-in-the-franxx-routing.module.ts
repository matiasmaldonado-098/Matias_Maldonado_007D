import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarlingInTheFranxxPage } from './darling-in-the-franxx.page';

const routes: Routes = [
  {
    path: '',
    component: DarlingInTheFranxxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarlingInTheFranxxPageRoutingModule {}
