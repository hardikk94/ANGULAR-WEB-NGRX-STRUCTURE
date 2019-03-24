import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFound404Component } from './core/components/page-not-found404/page-not-found404.component'
import { AuthGuardService } from './core/providers/auth.guard.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    canActivate:[AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: './pages/authentication/authentication.module#AuthenticationModule',
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule',
  },
  {
    path: 'forgot',
    loadChildren: './pages/forgot/forgot.module#ForgotModule',
  },
  {
    path: 'home',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
    canActivate:[AuthGuardService]
  },
  {
    path: 'not-found',
    component: PageNotFound404Component,
    pathMatch: 'full',
  },  
  {
    path: '**',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
