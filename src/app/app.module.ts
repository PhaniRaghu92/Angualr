import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationexComponent } from './components/interpolationex/interpolationex.component';
import { PropertybindingexComponent } from './components/propertybindingex/propertybindingex.component';
import { EventbindingexComponent } from './components/eventbindingex/eventbindingex.component';

@NgModule({
  declarations: [AppComponent, InterpolationexComponent, PropertybindingexComponent, EventbindingexComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
