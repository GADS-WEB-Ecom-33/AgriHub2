import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'product',
        canActivate: [AuthGuard],
        data: { preload: false },
        loadChildren: () =>
          import('./product/product.module').then(m => m.ProductModule)
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ], { preloadingStrategy: SelectiveStrategy })   // , { enableTracing: true, preloadingStrategy: SelectiveStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }