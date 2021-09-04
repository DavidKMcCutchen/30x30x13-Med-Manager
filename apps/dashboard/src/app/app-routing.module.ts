import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { MedsComponent } from './meds/meds.component';
import { LoginComponent, WildComponent } from "@med-manager/ui-login";
import { MedComponent } from './med/med.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'meds', component: MedsComponent},
  {path: 'meds/:id', component: MedComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }