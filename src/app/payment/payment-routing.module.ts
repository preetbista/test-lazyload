import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{ path: '', component: PaymentComponent, children: [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path:'user/:id',
    component: UserComponent
  }

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
