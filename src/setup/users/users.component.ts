import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { Controllers } from 'src/shared/global-variables/api-config';
import { BaseService } from 'src/shared/services/base.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { UserCustomService } from 'src/shared/services/user-custom.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'mobileNumber', 'email'];
  emptyData = new MatTableDataSource([{ empty: "row" }]);
  public isEdit = false;
  @ViewChild(MatPaginator, { read: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  pageIndex = 0;
  pageSize = 10;
  public selectedFile = null;
  public usersList: any[];
  public baseSearch: any;
  public totalListCount: any;
  filterForm = new FormGroup({
    name: new FormControl(''),
    mobileNumber: new FormControl(''),
    email: new FormControl(''),
  });

  getFormControlByName(controlName: string): FormControl {
    return this.filterForm.get(controlName) as FormControl;
  }

  constructor(
    private baseService: BaseService,
    public spinner: NgxSpinnerService,
    public notification: NotificationService,
    private UserCustomService: UserCustomService
  ) { }

  ngOnInit(): void {
    this.getAllUsers({
      pageSize: this.pageSize,
      pageNumber: 1,
      name: this.getFormControlByName('name').value,
      mobileNumber: this.getFormControlByName('mobileNumber').value,
      email: this.getFormControlByName('email').value,
    });
  }

  applyFilter(): void {
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.pageIndex = 0;
    this.getAllUsers({
      pageSize: this.pageSize,
      pageNumber: 1,
      name: this.getFormControlByName('name').value,
      mobileNumber: this.getFormControlByName('mobileNumber').value,
      email: this.getFormControlByName('email').value,
    });
  }


  updateStatus(userId: number): void {
    this.spinner.show();
    const Controller = Controllers.User;
    this.baseService.updateStatus(Controller, userId).subscribe(() => {
      this.spinner.hide();
      let user = this.usersList.find(user => user.id == userId);
      user.isActive = !user.isActive;
    });
  }
  getAllUsers(baseSearch: { pageSize: any; pageNumber: any; name?: string; mobileNumber?: string; email?: string }): void {
    this.spinner.show();
    const Controller = Controllers.User;
    this.baseService.getList(Controller, baseSearch).subscribe(res => {
      this.usersList = (res as any).entities;
      this.totalListCount = (res as any).totalCount;
      this.dataSource = new MatTableDataSource(this.usersList);
      this.dataSource.paginator = this.paginator;
      this.spinner.hide();
    });
  }

  changePage(event: { pageSize: any; pageIndex: number; }): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllUsers({
      pageSize: event.pageSize, pageNumber: event.pageIndex + 1,
      name: this.getFormControlByName('name').value,
      mobileNumber: this.getFormControlByName('mobileNumber').value,
      email: this.getFormControlByName('email').value,
    });
  }


  handleFileInput(file): void {
    this.selectedFile = file;
    this.importUserData()
  }

  importUserData() {
    if (this.selectedFile == null)
      return;

    this.spinner.show();
    this.UserCustomService.UploadFile(this.selectedFile).subscribe(res => {
      this.spinner.hide();
      this.getAllUsers({
        pageSize: this.pageSize,
        pageNumber: 1,
        name: this.getFormControlByName('name').value,
        mobileNumber: this.getFormControlByName('mobileNumber').value,
        email: this.getFormControlByName('email').value,
      });
    }, error => {
      this.spinner.hide();
      this.notification.showNotification('Import Data Failed', 'Something went wrong while uploading Data', 'error')
    })

  }


}
