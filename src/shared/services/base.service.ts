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

  public removeItemById(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.RemoveItemById + '/' + id);
  }

  public removeItem(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.RemoveItem + '/' + id);
  }
  public removeItemImage(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.RemoveItemImage + '/' + id);
  }

  public deleteVideo(controllerName, ItemId) {
    return this.http.get(apiPreLink + controllerName + 'DeleteVideo/' + ItemId);
  }

  public removeRange(controllerName: string, postobject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + Actions.RemoveRange, JSON.stringify(postobject), httpOptions);
  }

  public toggleAllItems(from, to): Observable<any> {
    return this.http.get(apiPreLink + 'Item/ToggleAllProducts/' + from + '/' + to);
  }

  public toggleSaleStatus(id): Observable<any> {
    return this.http.get(apiPreLink + 'Sale/ToggleStatus/' + id);
  }

  public activeList(controllerName) {
    return this.http.get(apiPreLink + controllerName + 'ActiveList')
  }

  public deleteCouponRule(id: number) {
    return this.http.get(apiPreLink + 'Coupon/DeleteCouponRules/' + id)
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


  public RegistUser(signup, certificate) {
    const formData = new FormData();
    formData.append('email', signup.email);
    formData.append('mobileNumber', signup.mobileNumber);
    formData.append('fullName', signup.fullName);
    formData.append('password', signup.password);
    formData.append('accountType', signup.accountType);
    formData.append('crNumber', signup.crNumber);
    formData.append('addresses', JSON.stringify(signup.addresses));
    formData.append('certificate', certificate);
    return this.http.post(apiPreLink + 'Auth/' + 'RegisterSignup', formData)
  }

  public EditUser(userInfo, certificate) {
    const formData = new FormData();
    formData.append('id', userInfo.id);
    formData.append('email', userInfo.email);
    formData.append('mobileNumber', userInfo.mobileNumber);
    formData.append('fullName', userInfo.fullName);
    formData.append('accountType', userInfo.accountType);
    formData.append('crNumber', userInfo.crNumber);
    formData.append('addresses', JSON.stringify(userInfo.addresses));
    formData.append('certificate', certificate);
    return this.http.post(apiPreLink + 'Auth/' + 'UpdateUseInfo', formData)
  }

  public UpdateUserInfo(signup) {
    return this.http.post(apiPreLink + 'Auth/' + 'UpdateUserProfile', JSON.stringify(signup), httpOptions)
  }

  public ChangePasswordAdmin(changePassword) {
    return this.http.post(apiPreLink + 'Auth/' + 'ChangePasswordFromAdmin', JSON.stringify(changePassword), httpOptions)
  }

  public AddImage(controllerName, actionName, objectId, file) {
    const formData = new FormData();
    formData.append('files', file)
    return this.http.post(apiPreLink + controllerName + actionName + '/' + objectId, formData)
  }
  public getActiveOrderCount() {
    return this.http.get(apiPreLink + 'Order/GetActiveOrderCount')
  }

  public getSuggestedItems(itemId): Observable<any> {
    return this.http.get(apiPreLink + Controllers.Item + "GetSuggestedItemsForAdmin/" + itemId);
  }

  public addSuggestedItems(itemId, suggestedItems) {
    return this.http.post(apiPreLink + Controllers.Item + "AddSuggestedItems/" + itemId, suggestedItems, httpOptions)
  }

  public getBanners() {
    return this.http.get(apiPreLink + 'Lookups/GetBanners');
  }

  public modifyItemPrices(postObject: any): Observable<any> {
    return this.http.post(apiPreLink + "Item/ModifyItemPrices", JSON.stringify(postObject), httpOptions);
  }

  uploadOrderInvoice(orderId, file): Observable<any> {
    const formData = new FormData();
    formData.append('id', orderId);
    formData.append('file', file);
    return this.http.post(apiPreLink + 'Order/AddInvoice', formData);
  }

  public syncMadarItems(): Observable<any> {
    return this.http.post(apiPreLink + Controllers.Integration + 'SyncMadarItems', httpOptions);
  }

}
