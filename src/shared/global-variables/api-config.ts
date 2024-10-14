import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
};


export const httpFormDataOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': undefined
  })
};

export enum Controllers {
  Auth = 'Auth/',
  Brand = 'Brand/',
  Banner = 'Banner/',
  CartItem = 'CartItem/',
  Category = 'Category/',
  Quotation = 'Quotation/',
  Item = 'Item/',
  Sale = 'Sale/',
  Set = 'Set/',
  SubCategory = 'SubCategory/',
  UserCart = 'UserCart/',
  UserOrder = 'UserOrder/',
  Color = 'Color/',
  Size = 'Size/',
  User = 'User/',
  Notification = 'Notification/',
  Order = 'Order/',
  News = 'News/',
  AppSettings = 'AppSettings/',
  ItemPrice = 'ItemPrice/',
  Excel = 'Excel/',
  Lookups = 'Lookups/',
  Provider = 'Provider/',
  Coupon = 'Coupon/',
  Faqs = 'Faqs/',
  Groups = 'Groups/',
  Reviews = 'Reviews/',
  ContactUs = 'ContactUs/',
  DriverRegistration = 'DriverRegistration/',
  MissigItems = 'MissingItems/',
  Integration = 'Integration/',

}

export enum Actions {
  GetList = 'GetList',
  GetFilteredItems = 'GetFilteredItems',
  GetById = 'GetById',
  Get = 'Get',
  GetByParentId = 'GetByParentId',
  GetAllItems = 'GetAllItems',
  GetAllItemsWithImages = 'GetAllItemsWithImages',
  GetItemsBySetId = 'GetItemsBySetId',
  PostItem = 'Create',
  PostSingleSale = 'PostSingleSale',
  PostRange = 'PostRange',
  EditItem = 'Update',
  DeleteSetItem = 'DeleteSetItem',
  EditRange = 'EditRange',
  RemoveItemById = 'RemoveItemById',
  RemoveItem = 'Delete',
  RemoveItemImage = 'DeleteItemImage',
  RemoveRange = 'RemoveRange',
  Login = 'Login',
  ChangePasswordFromAdmin = 'ChangePasswordFromAdmin',
  UpdateStatus = 'UpdateStatus',
  SendSingleUserNotification = 'SendSingleUserNotification',
  PodcastAllUsersNotification = 'PodcastAllUsersNotification',
  PodcastMultiUsersNotification = 'PodcastMultiUsersNotification',
  AddItemImages = 'AddItemImages',
  AddItemVideo = 'AddItemVideo',
  GetItemByIdWithRelated = 'GetItemByIdWithRelated',
  GetSubCategoryUsers = 'GetSubCategoryUsers',
  ExportTemplate = 'ExportTemplate',
  ExportOrder = 'ExportOrder',
  ExportUsers = 'ExportUsers',
  ExportItems = 'ExportItems',
  ImportItems = 'ImportItems',
  GetApplicationExceptions = 'GetApplicationExceptions',
  AddUserImage = 'AddUserImage',
  AddLogoImage = 'AddLogoImage',
  GetListForAdmin = 'GetListForAdmin',
  GetSettings = 'GetSettings'
}
