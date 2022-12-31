import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { ShowBlockedComponent } from './show-blocked/show-blocked.component';
import { ShowUnBlockedComponent } from './show-un-blocked/show-un-blocked.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { EmplpyeeDetailsComponent } from './emplpyee-details/emplpyee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllComponent,
    ShowBlockedComponent,
    ShowUnBlockedComponent,
    EmplpyeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
