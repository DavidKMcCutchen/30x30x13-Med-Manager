import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MedsComponent } from './meds/meds.component';
import { MedDetailsComponent } from './meds/med-details/med-details.component';
import { MedListComponent } from './meds/med-list/med-list.component';
import { MaterialModule } from "@med-manager/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@med-manager/core-data";
import { CoreStateModule } from "@med-manager/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@med-manager/environment';
import { UiLoginModule } from '@med-manager/ui-login';
import { MedComponent } from './med/med.component';
import { MedInfoComponent } from './med/med-info/med-info.component';

@NgModule({
  declarations: [AppComponent, MedsComponent, MedDetailsComponent, MedListComponent, MedInfoComponent, MedComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}