import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BaseService } from 'src/shared/services/base.service';
import { Actions, Controllers } from 'src/shared/global-variables/api-config';
import { NotificationService } from 'src/shared/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopupComponent } from 'src/shared/shared-components/info-popup/info-popup.component';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  public dashboardList;

  constructor(
    private dashboardService: DashboardService,
     private spinner: NgxSpinnerService,
     private baseService: BaseService,
     public notification: NotificationService,
     public dialog: MatDialog
   ) {}
  ngOnInit(): void {
    this.getDashboardData();
    this.openDialog()
  }

  clearLocalStorage(): void {
    localStorage.clear();
    window.location.reload();
  }
  getDashboardData(): void{
    this.spinner.show();
    this.dashboardService.getDashboardData().subscribe(res => {
      this.dashboardList = res;
      this.spinner.hide();

    }, error => {
      console.log(error);
      this.spinner.hide();
    })
  }


  exportUsers(){
    this.spinner.show();
      this.baseService.ExportExcel(Controllers.Excel,Actions.ExportUsers).subscribe(res =>{
        this.downLoadFile(res, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        this.spinner.hide();
      }, error => {
        console.log(error);
        if (error.status === 400) {
          this.notification.showNotification('Edit Item Failed', error.error.Message, 'error');
        }
        else {
          this.notification.showNotification('Edit Item Failed', 'Something went wrong please contact system admin', 'error');
        }
        this.spinner.hide();
      });
  }

  exportOrders(){
    this.spinner.show();
      this.baseService.ExportExcel(Controllers.Excel,Actions.ExportOrder).subscribe(res =>{
        this.downLoadFile(res, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        this.spinner.hide();
      }, error => {
        console.log(error);
        if (error.status === 400) {
          this.notification.showNotification('Edit Item Failed', error.error.Message, 'error');
        }
        else {
          this.notification.showNotification('Edit Item Failed', 'Something went wrong please contact system admin', 'error');
        }
        this.spinner.hide();
      });
  }

  downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type.toString() });
    var url = window.URL.createObjectURL(blob);
    var pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }
  openDialog(){
    const dialogRef = this.dialog.open(InfoPopupComponent, {
      width: '50vh',
    });
  }
}
