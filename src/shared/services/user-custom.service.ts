import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class UserCustomService {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
  }

  UploadFile(file): Observable<any>{    
    const formData = new FormData();
    formData.append('ExcelFile', file);
    return this.httpClient.post(apiPreLink + 'User/UploadExcel', formData);
  }

  
}
