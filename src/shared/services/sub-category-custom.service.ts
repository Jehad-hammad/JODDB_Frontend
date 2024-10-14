import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class SubCategoryCustomService {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
  }

  addSubCategoryWithFile(subCategory, file): Observable<any> {
    const formData = new FormData();
    formData.append('name', subCategory.name);
    formData.append('nameAr', subCategory.nameAr);
    formData.append('categoryId', subCategory.categoryId);
    formData.append('orderNumber', subCategory.orderNumber);
    formData.append('description', subCategory.description);
    formData.append('status', subCategory.status);
    formData.append('file', file);
    formData.append('deliveryCost', subCategory.deliveryCost);
    formData.append('maxAmountPercentage', subCategory.maxAmountPercentage);
    formData.append('maxAmount', subCategory.maxAmount);
    return this.httpClient.post(apiPreLink + 'SubCategory/Create', formData);
  }

  updateSubCategoryWithFile(subCategory, file): Observable<any> {
    const formData = new FormData();
    formData.append('Id', subCategory.id);
    formData.append('name', subCategory.name);
    formData.append('nameAr', subCategory.nameAr);
    formData.append('categoryId', subCategory.categoryId);
    formData.append('orderNumber', subCategory.orderNumber);
    formData.append('description', subCategory.description);
    formData.append('status', subCategory.status);
    formData.append('file', file);
    formData.append('deliveryCost', subCategory.deliveryCost);
    formData.append('maxAmountPercentage', subCategory.maxAmountPercentage);
    formData.append('maxAmount', subCategory.maxAmount);
    return this.httpClient.post(apiPreLink + 'SubCategory/Update', formData);
  }
}
