import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'; 
import { AppComponent } from './app.component';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WelcomeComponent } from './welcome/welcome.component';
import {ProductData} from './product/product-data'
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { PagenotfoundComponent } from './pagenotfound.component';
import { ProductModule } from './product/product.module';
import {UserModule} from './user/user.module';
import {MessageModule} from './message/message.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    
    AppComponent, 
    WelcomeComponent,
    PagenotfoundComponent
   
    
    
  ], 
  imports: [
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    BrowserModule,
    HttpClientModule,
    UserModule.RouterModuleforRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ]),
    ProductModule,
    UserModule,
    MessageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



