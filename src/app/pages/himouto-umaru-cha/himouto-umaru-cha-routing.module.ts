import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HimoutoUmaruChaPage } from './himouto-umaru-cha.page';

const routes: Routes = [
  {
    path: '',
    component: HimoutoUmaruChaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HimoutoUmaruChaPageRoutingModule {}
