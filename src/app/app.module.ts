import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { TripQuoteComponent } from './pages/trip-quote/trip-quote.component';
import { LifeQuoteComponent } from './pages/life-quote/life-quote.component';
import { AccidentCoverQuoteComponent } from './pages/accident-cover-quote/accident-cover-quote.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    TripQuoteComponent,
    LifeQuoteComponent,
    AccidentCoverQuoteComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
