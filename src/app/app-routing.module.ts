import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component'
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticationService } from './authentication.service';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/:id', component: ProductsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'order-confirmed', component: EditComponent},
  {path: 'registration', canActivateChild: [AuthenticationService], component: AccountComponent, },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
