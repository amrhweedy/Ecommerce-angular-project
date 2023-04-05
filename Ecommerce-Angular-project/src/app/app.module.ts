import { CartComponent } from './Components/cart/cart.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { ComponentModule } from './Components/Shared/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarUserComponent } from './Components/navbar-user/navbar-user.component';
import { ProductsComponent } from './Components/products/products.component';
import { SliderComponent } from './Components/slider/slider.component';
import { AuthInterceptorService } from './Components/Services/interceptor.service';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    ProductlistComponent,
    AddProductComponent,
    ProductItemComponent,
    OrdersComponent,
    CustomersComponent,
    LoginAdminComponent,
    DashboardComponent,
    LoginUserComponent,
    CartComponent,
    RegisterComponent,
    UserRegisterComponent,
    AboutUsComponent,
    FooterComponent,
    HomeComponent,
    NavbarUserComponent,
    ProductsComponent,
    SliderComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
