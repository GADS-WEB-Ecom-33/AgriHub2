import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'; 
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDatailComponent } from './product-datail/product-datail.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { PagenotfoundComponent } from './pagenotfound.component';
import { StarComponent } from './star/star.component';
import { ProductData } from './product/product-data';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    
    AppComponent, 
    LoginComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductDatailComponent,
    PagenotfoundComponent,
    StarComponent,
    ProductData,
    ProductModule
    
    
  ], 
  imports: [
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    BrowserModule,
    HttpClientModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



