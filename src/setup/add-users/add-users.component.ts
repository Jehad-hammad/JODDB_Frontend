import { AccountTypes, accountTypes } from './../../shared/global-variables/lookups';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseService } from 'src/shared/services/base.service';
import { NotificationService } from 'src/shared/services/notification.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  public selectedFile;
  public imageUrl
  @ViewChild('fileInput') myInputVariable: ElementRef;

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private baseService: BaseService,
    public spinner: NgxSpinnerService,
    private yesNoDialog: MatDialog,
    private route: Router,
    public notification: NotificationService) { }

  ngOnInit(): void {
  }



  RegistNewUser() {
    if (this.userForm.invalid ) {
      this.userForm.markAllAsTouched()
    } else {
      const form = this.userForm.value
      this.spinner.show()
      this.baseService.RegistUser(form, this.selectedFile).subscribe(res => {
        this.spinner.hide()
        this.notification.showNotification('User', 'User Has Been Registered Successfully', 'success')
        this.route.navigate(['/users'])
      }, error => {
        this.spinner.hide()
        if (error.status === 400) {
          this.notification.showNotification('User Failed', 'Mobile number or email already exist', 'error');
        }
        else {
          this.notification.showNotification('User Failed', 'Something went wrong please contact system admin', 'error');
        }
      }
      )
    }

  }


  //#region form functions
  formControlValue(formControlName) {
    return this.userForm.get(formControlName).value
  }
  formControlValidation(formControlName) {
    this.userForm.get(formControlName).setValidators(Validators.required)
    this.userForm.updateValueAndValidity()
  }
  clearFormControlValidator(formControlName) {
    this.userForm.get(formControlName).clearValidators()
    this.userForm.updateValueAndValidity()
  }

  handleFileInput(file): void {
    this.selectedFile = file;

    const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = reader.result; // Store the image URL
      };

      reader.readAsDataURL(file); // Read file as data URL
  }

  clearFileInput(): void {
    this.myInputVariable.nativeElement.value = '';
    this.selectedFile = null;
  }


  //#endregion

}
