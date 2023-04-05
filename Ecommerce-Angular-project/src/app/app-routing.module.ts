import { CartComponent } from './Components/cart/cart.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './Components/customers/customers.component';
import { HomeComponent } from './Components/home/home.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'adminlogin', component: LoginAdminComponent },
  { path: 'product/details/:id/getcart/:id', component: CartComponent },
  { path: 'product/details/:id', component: ProductDetailsComponent },

  {
    path: 'register',
    component: UserRegisterComponent,
  },
  {
    path: 'home',
    component: SidenavComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductlistComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'addProduct/new', component: AddProductComponent },
      { path: 'products/addProduct/:id', component: AddProductComponent },
      { path: 'editProduct', component: AddProductComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
