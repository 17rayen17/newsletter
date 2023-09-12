import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  {path:'success', component:SuccessComponent},
  {path:'',component:NewsletterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
