import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { MaterialModule } from './modules/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LedControllerComponent } from './components/led-controller/led-controller.component'
import { OpenPixelControlService } from './services/open-pixel-control.service'

@NgModule({
  declarations: [
    AppComponent,
    LedControllerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [OpenPixelControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
