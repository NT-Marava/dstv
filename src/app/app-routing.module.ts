import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GateMotorsComponent } from './components/gate-motors/gate-motors.component';
import { DstvComponent } from './components/dstv/dstv.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'D10-gate-motors', component: GateMotorsComponent },
  { path: 'dstv-installations', component: DstvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
