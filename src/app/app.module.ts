import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sec2ContainerComponent } from './components/section2/sec2-container/sec2-container.component';
import { Sec2ContentComponent } from './components/section2/sec2-content/sec2-content.component';

@NgModule({
  declarations: [
    AppComponent,
    Sec2ContainerComponent,
    Sec2ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
