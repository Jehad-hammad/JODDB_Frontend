import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Controllers, httpFormDataOptions, httpOptions } from '../global-variables/api-config';
import { environment } from '../../environments/environment';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {

  }

  public getAllItems(controllerName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetAllItems);
  }
  public getAllItemsWithImages(controllerName: string, subCategoryId: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetAllItemsWithImages + '/' + subCategoryId);
  }
  public getItemsBySetId(controllerName: string, setId: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetItemsBySetId + '/' + setId);
  }
  public getSubCategoryUsers(controllerName: string, subCategoryId: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetSubCategoryUsers + '/' + subCategoryId);
  }

  public getApplicationExceptions(controllerName: string, baseSearch): Observable<any> {
    return this.http.post(apiPreLink + controllerName + Actions.GetApplicationExceptions, JSON.stringify(baseSearch), httpOptions);
  }
  public getList(controllerName: string, baseSearch): Observable<any> {
    return this.http.post(apiPreLink + controllerName + Actions.GetList, JSON.stringify(baseSearch), httpOptions);
  }
  public getListForAdmin(controllerName: string, ActionName, baseSearch): Observable<any> {
    return this.http.post(apiPreLink + controllerName + ActionName, JSON.stringify(baseSearch), httpOptions);
  }
  public getLookupsListForAdmin(controllerName: string, ActionName, baseSearch, typeId): Observable<any> {
    return this.http.post(apiPreLink + controllerName + ActionName + '/' + typeId, JSON.stringify(baseSearch), httpOptions);
  }

  public getSettings(controllerName: string, ActionName): Observable<any> {
    return this.http.get(apiPreLink + controllerName + ActionName);
  }
  public getFilteredItems(controllerName: string, baseSearch): Observable<any> {
    return this.http.post(apiPreLink + controllerName + Actions.GetFilteredItems, JSON.stringify(baseSearch), httpOptions);
  }

  public getById(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetById + '/' + id);
  }
  public getNews(controllerName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.Get);
  }
  public getByIdWithRelated(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetItemByIdWithRelated + '/' + id);
  }
  public getByParentId(controllerName: string, parentId: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetByParentId + '/' + parentId);
  }

  public postItem(controllerName: string, actionName: string, postObject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), httpOptions);
  }
  public postItemImages(controllerName: string, actionName: string, itemId: number, itemImages: FormData): Observable<any> {

    return this.http.post(apiPreLink + controllerName + actionName + '/' + itemId, itemImages, { responseType: 'text' });
  }
  public postItemVideo(controllerName: string, actionName: string, itemId: number, ItemVideo: FormData): Observable<any> {
    return this.http.post(apiPreLink + controllerName + actionName + '/' + itemId, ItemVideo, { responseType: 'text' });
  }

  public PostRange(controllerName: string, actionName: string, postObject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), httpOptions);
  }

  public editItem(controllerName: string, editObject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + Actions.EditItem, JSON.stringify(editObject), httpOptions);
  }
  public deleteSetItem(itemId: number): Observable<any> {
    return this.http.get(apiPreLink + Controllers.Item + Actions.DeleteSetItem + '/' + itemId, httpOptions);
  }
  public updateStatus(controllerName: string, id: number): Observable<any> {
    return this.http.post(apiPreLink + controllerName + Actions.UpdateStatus, id, httpOptions);
  }

  public editRange(controllerName: string, editObject: any): Observable<any> {
    return this.http.put(apiPreLink + controllerName + Actions.EditRange, JSON.stringify(editObject), httpOptions);
  }

  public Get(Action:string){
    return this.http.get(apiPreLink + Action)
  }

  public ExportExcel(ControllerName, actionName, id?: number) {
    return this.http.get(apiPreLink + ControllerName + actionName + (id ? '/' + id : ''), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      }), responseType: 'blob'
    })
  }

  public ImportExcel(ControllerName, actionName, formFile) {
    return this.http.post(apiPreLink + ControllerName + actionName, formFile, {
      responseType: 'text'
    })
  }


  public RegistUser(signup, file) {
    const formData = new FormData();
    formData.append('email', signup.email);
    formData.append('mobileNumber', signup.mobileNumber);
    formData.append('name', signup.name);
    formData.append('password', signup.password);
    formData.append('file', file);
    return this.http.post(apiPreLink + 'User/' + 'UserRegistration', formData)
  }


}
