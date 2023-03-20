import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaylistSuggereComponent } from './playlist-suggere/playlist-suggere.component';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistSuggereComponent,
    PagePrincipaleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
