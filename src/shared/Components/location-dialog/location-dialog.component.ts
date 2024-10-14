import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/shared/shared-components/yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.scss']
})
export class LocationDialogComponent implements OnInit {

  center: google.maps.LatLngLiteral;
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPosition: google.maps.LatLngLiteral | undefined
  

  public providersList;

  providerForm = new FormGroup({
    providerId: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<LocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.center = { lat: data.lat, lng: data.lng }
    this.markerPosition = { lat: data.lat, lng: data.lng }
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close()
  }

}
