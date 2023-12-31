import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/componentes/header/header.component';
import { BodyComponent } from './shared/componentes/body/body.component';
import { FooterComponent } from './shared/componentes/footer/footer.component';
import { AboutComponent } from './home/pages/about/about.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { IndexComponent } from './componentes/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyComponent } from './shared/componentes/privacy/privacy.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './home/pages/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    IndexComponent,
    PrivacyComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
