
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../app/material.module';
import { SetupRoutingModule } from './setup-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SetupComponent } from './setup.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { UsersComponent } from './users/users.component';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from 'src/auth/authorize.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddUsersComponent } from './add-users/add-users.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    MaterialModule,
    NgxGalleryModule,
    CKEditorModule,
    FlexLayoutModule,
    NgSelectModule
  ],
  entryComponents: [
  ],
  declarations: [
    SetupComponent,
    UsersComponent,
    AddUsersComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },DatePipe
  ],
})
export class SetupModule { }
