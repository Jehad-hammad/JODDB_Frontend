import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const apiPreLink = environment.apiPreLink;

@Injectable({
  providedIn: 'root'
})
export class QuotationFileService {

  constructor(private httpClient : HttpClient) { }


  postQuotationWithFile(quotation, file): Observable<any>{  
    debugger  
    const formData = new FormData();
    formData.append('QuotationId', quotation.quotationId);
    formData.append('TotalAmount', quotation.totalAmount);
    formData.append('SubTotal', quotation.subTotal);
    formData.append('DeliveryFees', quotation.deliveryFees);
    formData.append('Tax', quotation.tax);
    formData.append('TaxAmount', quotation.taxAmount);
    formData.append('DiscountPercentage', quotation.discountPercentage);
    formData.append('QoutationFile', file);
    
    return this.httpClient.post(apiPreLink + 'Quotation/SendQuotation', formData);
  }
}
