import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/pages/about/about.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { BodyComponent } from './shared/componentes/body/body.component';
import { PrivacyComponent } from './shared/componentes/privacy/privacy.component';
import { NotFoundComponent } from './home/pages/not-found/not-found.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'body', component:BodyComponent},
  {path:'privacy', component:PrivacyComponent},
  {path:'not-found', component: NotFoundComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
