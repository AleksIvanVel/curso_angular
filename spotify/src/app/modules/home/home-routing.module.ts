import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazy loading de componentes cargados en el router outlet (hijo)
  {
    path:'tracks',
    loadChildren:()=>import(`../tracks/tracks.module`).then(m=>m.TracksModule)
  },
  {
    path:'favorites',
    loadChildren:()=>import(`../favorites/favorites.module`).then(m=>m.FavoritesModule)
  },
  {
    path:'history',
    loadChildren:()=>import(`../history/history.module`).then(m=>m.HistoryModule)
  },
  {
    path: '**',
    redirectTo:'/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
