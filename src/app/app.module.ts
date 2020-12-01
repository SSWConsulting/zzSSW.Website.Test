import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './modules/general/header/header.component';
import { HeaderNavigationComponent } from './modules/general/header-navigation/header-navigation.component';
import { FooterComponent } from './modules/general/footer/footer.component';
import { TestimonialsModule } from './modules/general/testimonials/testimonials.module';
import { TechnologiesModule } from './modules/general/technologies/technologies.module';
import { BenefitsModule } from './modules/general/benefits/benefits.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    HeaderNavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    TestimonialsModule,
    TechnologiesModule,
    BenefitsModule
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
