import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DetailComponent } from './detail/detail.component';
import {FormsModule} from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';
import { AsyncExampleComponent } from './async-example/async-example.component';
import { AsyncExample2Component } from './async-example2/async-example2.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DetailComponent,
    WelcomeComponent,
    AsyncExampleComponent,
    AsyncExample2Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
