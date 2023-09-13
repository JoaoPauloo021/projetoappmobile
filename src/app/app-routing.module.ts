import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/pages/about/about.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { BodyComponent } from './shared/componentes/body/body.component';


const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'body', component:BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
