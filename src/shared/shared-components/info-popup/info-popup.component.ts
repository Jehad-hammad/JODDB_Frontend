import { navItems } from 'src/shared/global-variables/menu-items-config';
import { BaseService } from 'src/shared/services/base.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.scss']
})
export class InfoPopupComponent implements OnInit {

  public dashboardData
  constructor(public dialogRef: MatDialogRef<InfoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public baseService: BaseService) { }

  ngOnInit(): void {
    this.getActiveOrderCount()
  }

  getActiveOrderCount() {
    this.baseService.getActiveOrderCount().subscribe(res => {
      this.dashboardData = res as any
      this.dashboardData.name = this.dashboardData.name.replace("{{count}}", this.dashboardData.value)
    })
  }
}
