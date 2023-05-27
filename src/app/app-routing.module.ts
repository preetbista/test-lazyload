import { NgModule } from "@angular/core";
// import { Route } from "@angular/router";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
// import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},

{
  path:'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
  { path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers:[],
  exports: [RouterModule]
})

export class AppRoutingModule{}
