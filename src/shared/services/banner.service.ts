import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private httpClient: HttpClient) {
  }
  postItemWithFile(banner, file): Observable<any> {
    const formData = new FormData();
    formData.append('description', banner.description);
    formData.append('status', banner.status);
    formData.append('typeId', banner.typeId);
    formData.append('parentId', banner.parentId);
    formData.append('file', file);
    return this.httpClient.post(apiPreLink + 'Lookups/Create', formData);
  }
  postSettings(banner): Observable<any> {
    const formData = new FormData();
    formData.append('bannerar1', banner.bannerar1);
    formData.append('banneren1', banner.banneren1);
    formData.append('banneren2', banner.banneren2);
    formData.append('bannerar2', banner.bannerar2);
    formData.append('banneren3', banner.banneren3);
    formData.append('bannerar3', banner.bannerar3);
    return this.httpClient.post(apiPreLink + 'Lookups/UpdateSettings', formData);
  }
  updateItemWithFile(banner, file): Observable<any> {
    const formData = new FormData();
    formData.append('Id', banner.id);
    formData.append('description', banner.description);
    formData.append('status', banner.status);
    formData.append('typeId', banner.typeId);
    formData.append('parentId', banner.parentId);
    formData.append('file', file);
    return this.httpClient.post(apiPreLink + 'Lookups/Update', formData);
  }
}
