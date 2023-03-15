import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaylistSuggereComponent } from './playlist-suggere/playlist-suggere.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistSuggereComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
