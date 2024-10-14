import { AccountTypes, accountTypes } from './../../shared/global-variables/lookups';
import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
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

  public AccountType: any[] = []
  public Addresses: any[] = []
  public isContractor: boolean = false
  public selectedFile;

  @ViewChild('fileInput') myInputVariable: ElementRef;

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    fullName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
    crNumber: new FormControl(''),
    certificate: new FormControl(''),
  })

  addressesForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    postalCode: new FormControl(''),
    isDefault: new FormControl(true)
  })


  constructor(private baseService: BaseService,
    public spinner: NgxSpinnerService,
    private yesNoDialog: MatDialog,
    private route: Router,
    public notification: NotificationService) { }

  ngOnInit(): void {
    this.AccountType = accountTypes
  }



  RegistNewUser() {
    if (this.userForm.invalid || this.Addresses.length < 1) {
      this.userForm.markAllAsTouched()
      this.addressesForm.markAllAsTouched()
    } else {

      if (!this.Addresses.some(x => x.isDefault == true)) {
        this.notification.showNotification('User Failed', 'One of the addresses must be set as deafult address', 'error');
        return;
      }

      if (this.Addresses.filter(x => x.isDefault == true).length > 1) {
        this.notification.showNotification('User Failed', 'Only one address must be set as deafult address', 'error');
        return;
      }

      const form = this.userForm.value
      form.addresses = this.Addresses
      this.spinner.show()

      this.baseService.RegistUser(form, this.selectedFile).subscribe(res => {
        this.spinner.hide()
        this.notification.showNotification('User', 'User Has Been Registered Successfully', 'success')
        this.route.navigate(['/setup/users'])
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

  //#region events
  onAccountTypeChange() {
    if (this.formControlValue('accountType') == AccountTypes.Contractor) {
      this.isContractor = true
      this.formControlValidation('crNumber')
      this.formControlValidation('certificate')
    } else {
      this.isContractor = false
      this.clearFormControlValidator('crNumber')
      this.clearFormControlValidator('certificate')
    }
  }

  onAddAddresses() {
    if (this.addressesForm.invalid) {
      this.addressesForm.markAllAsTouched()
    } else {
      this.Addresses.push(this.addressesForm.value)
      this.addressesForm.reset()
      this.addressesForm.get('isDefault').setValue(false)
    }

  }
  onDeleteAddresses(address) {
    this.Addresses = this.Addresses.filter(x => x != address)
  }
  //#endregion

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
    this.userForm.controls.certificate.setValue(file.name)
  }

  clearFileInput(): void {
    this.myInputVariable.nativeElement.value = '';
    this.selectedFile = null;
    this.userForm.controls.certificate.setValue('')
  }


  //#endregion

}
