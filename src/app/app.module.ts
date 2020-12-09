import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './modules/general/header/header.component';
import { HeaderNavigationComponent } from './modules/general/header-navigation/header-navigation.component';
import { FooterComponent } from './modules/general/footer/footer.component';

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
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
