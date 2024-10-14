import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Controllers } from 'src/shared/global-variables/api-config';
import { BaseService } from 'src/shared/services/base.service';
import { DialogData } from 'src/shared/shared-components/yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-provider-dialog',
  templateUrl: './provider-dialog.component.html',
  styleUrls: ['./provider-dialog.component.scss']
})
export class ProviderDialogComponent implements OnInit {

  public providersList;

  providerForm = new FormGroup({
    providerId: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<ProviderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private baseService: BaseService,
  ) { }

  ngOnInit(): void {
    this.getAllProviders()
  }



  getAllProviders(): void {
    const Controller = Controllers.Provider;
    this.baseService.getAllItems(Controller).subscribe(res => {
      this.providersList = res;
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    if (this.providerForm.invalid) {
      this.providerForm.markAllAsTouched()
    } else {
      this.dialogRef.close(this.providerForm.value);
    }
  }
  onCancel() {
    this.dialogRef.close()
  }

}
