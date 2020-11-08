import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'; 
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDatailComponent } from './product-datail/product-datail.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { PagenotfoundComponent } from './pagenotfound.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    
    AppComponent, 
    LoginComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductDatailComponent,
    PagenotfoundComponent,
    StarComponent
  ], 
  imports: [
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent}
    ]),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
