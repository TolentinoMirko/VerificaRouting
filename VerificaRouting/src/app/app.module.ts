import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSerieTvComponent } from './search-serie-tv/search-serie-tv.component';
import { DetailsSerieTvComponent } from './details-serie-tv/details-serie-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSerieTvComponent,
    DetailsSerieTvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
