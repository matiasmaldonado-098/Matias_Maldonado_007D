import { NgModule } from '@angular/core';
import { PreloadAllModules ,Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      
        {
          path: 'inicio',
          loadChildren: () => import('./../../pages/inicio/inicio.module').then( m => m.InicioPageModule)
        },
        {
          path: 'alert',
          loadChildren: () => import('./../../pages/alert/alert.module').then( m => m.AlertPageModule)
        },
        {
          path: 'action-sheet',
          loadChildren: () => import('./../../pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
        },
        {
          path: 're',
          loadChildren: () => import('./../../pages/re/re.module').then( m => m.RePageModule)
        },
        {
          path: 'himouto-umaru-cha',
          loadChildren: () => import('./../../pages/himouto-umaru-cha/himouto-umaru-cha.module').then( m => m.HimoutoUmaruChaPageModule)
        },
        {
          path: 'the-rising-of-the-shield-hero',
          loadChildren: () => import('./../../pages/the-rising-of-the-shield-hero/the-rising-of-the-shield-hero.module').then( m => m.TheRisingOfTheShieldHeroPageModule)
        },
        {
          path: 'darling-in-the-franxx',
          loadChildren: () => import('./../../pages/darling-in-the-franxx/darling-in-the-franxx.module').then( m => m.DarlingInTheFranxxPageModule)
        },
        {
          path: 'manga',
          loadChildren: () => import('./../../pages/manga/manga.module').then( m => m.MangaPageModule)
        },
        {
          path: 'carritodecompra',
          loadChildren: () => import('./../../pages/carritodecompra/carritodecompra.module').then( m => m.CarritodecompraPageModule)
        },
        {
          path: 'perfilusuario',
          loadChildren: () => import('./../../pages/perfilusuario/perfilusuario.module').then( m => m.PerfilusuarioPageModule)
        },
        {
          path: 'noticia',
          loadChildren: () => import('./../../pages/noticia/noticia.module').then( m => m.NoticiaPageModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
