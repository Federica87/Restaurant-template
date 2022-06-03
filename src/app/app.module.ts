import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sec2ContainerComponent } from './components/section2/sec2-container/sec2-container.component';
import { Sec2ContentComponent } from './components/section2/sec2-content/sec2-content.component';
import { Sec2ImgComponent } from './components/section2/sec2-img/sec2-img.component';
import { Section3Component } from './components/section3/section3.component';
import { Sec6ContainerComponent } from './components/section6/sec6-container/sec6-container.component';
import { Sec6ContentComponent } from './components/section6/sec6-content/sec6-content.component';
import { Sec6ImgComponent } from './components/section6/sec6-img/sec6-img.component';

@NgModule({
  declarations: [
    AppComponent,
    Sec2ContainerComponent,
    Sec2ContentComponent,
    Sec2ImgComponent,
    Section3Component,
    Sec6ContainerComponent,
    Sec6ContentComponent,
    Sec6ImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
