import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../app/material.module';
import { YesNoDialogComponent } from './shared-components/yes-no-dialog/yes-no-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ProviderDialogComponent } from './Components/provider-dialog/provider-dialog.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationDialogComponent } from './Components/location-dialog/location-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    GoogleMapsModule
  ],
  declarations: [
    SharedComponent,
    YesNoDialogComponent,
    ProviderDialogComponent,
    LocationDialogComponent
  ],
})
export class SharedModule { }
