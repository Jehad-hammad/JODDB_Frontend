import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class BannerCustomService {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
  }

  postBannerWithFile(banner, imageDesktopEn, imageDesktopAr, imageMobileEn, imageMobileAr): Observable<any> {    
    const formData = new FormData();
    formData.append('titleEn', banner.titleEn);
    formData.append('titleAr', banner.titleAr);
    formData.append('buttonTitleAr', banner.buttonTitleAr);
    formData.append('buttonTitleEn', banner.buttonTitleEn);
    formData.append('buttonInternalLink', banner.buttonInternalLink);
    formData.append('descriptionAr', banner.descriptionAr);
    formData.append('descriptionEn', banner.descriptionEn);
    formData.append('bannerType', banner.bannerType);
    formData.append('status', banner.status);
    formData.append('imageMobileAr', imageMobileAr);
    formData.append('imageMobileEn', imageMobileEn);
    formData.append('imageDesktopAr', imageDesktopAr);
    formData.append('imageDesktopEn', imageDesktopEn);
    if (banner?.order)
      formData.append('order', banner?.order);
    return this.httpClient.post(apiPreLink + 'Banner/Create', formData);
  }

  updateBannerWithFile(banner, imageDesktopEn, imageDesktopAr, imageMobileEn, imageMobileAr): Observable<any> {
    const formData = new FormData();
    formData.append('Id', banner.id);
    formData.append('titleEn', banner.titleEn);
    formData.append('titleAr', banner.titleAr);
    formData.append('buttonTitleAr', banner.buttonTitleAr);
    formData.append('buttonTitleEn', banner.buttonTitleEn);
    formData.append('buttonInternalLink', banner.buttonInternalLink);
    formData.append('descriptionAr', banner.descriptionAr);
    formData.append('descriptionEn', banner.descriptionEn);
    formData.append('bannerType', banner.bannerType);
    formData.append('status', banner.status);
    formData.append('imageMobileAr', imageMobileAr);
    formData.append('imageMobileEn', imageMobileEn);
    formData.append('imageDesktopAr', imageDesktopAr);
    formData.append('imageDesktopEn', imageDesktopEn);
    if (banner?.order)
      formData.append('order', banner?.order);
    return this.httpClient.post(apiPreLink + 'Banner/Update', formData);
  }
}
