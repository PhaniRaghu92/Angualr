import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationexComponent } from './components/interpolationex/interpolationex.component';
import { PropertybindingexComponent } from './components/propertybindingex/propertybindingex.component';
import { EventbindingexComponent } from './components/eventbindingex/eventbindingex.component';
import { TwowaybindingexComponent } from './components/twowaybindingex/twowaybindingex.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { ParentSimpleComponent } from './components/parent-simple/parent-simple.component';
import { ChildSimpleComponent } from './components/child-simple/child-simple.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CondstmtsComponent } from './components/condstmts/condstmts.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationexComponent,
    PropertybindingexComponent,
    EventbindingexComponent,
    TwowaybindingexComponent,
    RegistrationComponent,
    ParentSimpleComponent,
    ChildSimpleComponent,
    ParentComponent,
    ChildComponent,
    CondstmtsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
