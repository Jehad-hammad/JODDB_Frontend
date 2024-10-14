import { environment } from './../environments/environment';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './../app/material.module';
import { AuthRouting } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRouting,
    
  ],
  declarations: [
    LoginComponent,
    AuthComponent

  ]
})
export class AuthModule { }
