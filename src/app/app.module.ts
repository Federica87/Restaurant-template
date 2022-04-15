import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sec2ContainerComponent } from './components/section2/sec2-container/sec2-container.component';
import { Sec2ContentComponent } from './components/section2/sec2-content/sec2-content.component';
import { Sec2ImgComponent } from './components/section2/sec2-img/sec2-img.component';

@NgModule({
  declarations: [
    AppComponent,
    Sec2ContainerComponent,
    Sec2ContentComponent,
    Sec2ImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
