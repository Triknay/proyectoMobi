import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perros',
    loadChildren: () => import('./pages/perros/perros.module').then( m => m.PerrosPageModule)
  },
  {
    path: 'gatos',
    loadChildren: () => import('./pages/gatos/gatos.module').then( m => m.GatosPageModule)
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./pages/alimentos/alimentos.module').then( m => m.AlimentosPageModule)
  },
  {
    path: 'farmacia',
    loadChildren: () => import('./pages/farmacia/farmacia.module').then( m => m.FarmaciaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
