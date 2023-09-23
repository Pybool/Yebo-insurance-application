import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { TripQuoteComponent } from './pages/trip-quote/trip-quote.component';
import { LifeQuoteComponent } from './pages/life-quote/life-quote.component';
import { AccidentCoverQuoteComponent } from './pages/accident-cover-quote/accident-cover-quote.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'trip-qoute', component: TripQuoteComponent },
  {path: 'life-qoute', component: LifeQuoteComponent },
  {path: 'accident-qoute', component: AccidentCoverQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
