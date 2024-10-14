export const errorMessages = [
  { id: 1, name: 'LoginPasswordWrong', messageEn: 'Username or password is wrong', messageAr: 'اسم المستخدم او الرقم السري خاطئة' },
  { id: 2, name: 'MobileNumberIsUsed', messageEn: 'Mobile number is used', messageAr: 'رقم الهاتف مستخدم' },
  { id: 3, name: 'ErrorCreatingAccount', messageEn: 'Error creating account', messageAr: 'خطا في تسجيل حساب جديد' },
  { id: 4, name: 'ErrorUpdatingAccount', messageEn: 'Error updating account', messageAr: 'خطا في تعديل الحساب' },
  { id: 5, name: 'UserNotFound', messageEn: 'User not found', messageAr: 'المستخدم غير موجود' },
  { id: 6, name: 'ItemCountNotEnough', messageEn: 'Item count is not enough', messageAr: 'الكمية غير كافية لتنفيذ طلبك' },
  { id: 7, name: 'UserCartNotFound', messageEn: 'You don\'t have a cart, please contact system admin to add one', messageAr: 'لا يوجد لديك سلة، يرجى التواصل مع الادارة لاضافة واحدة' },
  { id: 8, name: 'CartIsEmpty', messageEn: 'Cart is empty', messageAr: 'السلة فارغة' },
  { id: 9, name: 'ItemNotAvailable', messageEn: 'Item is not available', messageAr: 'المنتج غير متوفر حاليا' },
  { id: 10, name: 'ItemAlreadyExist', messageEn: 'Item is already exist in cart', messageAr: 'المنتج موجود بالفعل في السلة' }
];

export const PricingMethods = [
  { id: 1, nameEn: 'Normal', nameAr: 'عادي' },
  { id: 2, nameEn: 'Tiles', nameAr: 'بلاط' },
]

export const BannerTypes = [
  { id: 1, nameEn: 'Home Page Banner', nameAr: 'الصفحة الرئيسية' },
  { id: 2, nameEn: 'Product List Upper', nameAr: 'المنتجات العلوي' },
  { id: 3, nameEn: 'Product List Side', nameAr: 'المنتجات الجانبي' },
  { id: 4, nameEn: 'Wishlist', nameAr: 'Wishlist' },
  { id: 5, nameEn: 'Discount', nameAr: 'Discount' },
]
export enum ErrorMessages {
  LoginPasswordWrong = 1,
  MobileNumberIsUsed = 2,
  ErrorCreatingAccount = 3,
  ErrorUpdatingAccount = 4,
  UserNotFound = 5,
  ItemCountNotEnough = 6,
  UserCartNotFound = 7,
  CartIsEmpty = 8,
  ItemNotAvailable = 9,
  ItemAlreadyExist = 10
}


export const accountTypes = [
  { id: 1, name: 'Individual' },
  { id: 2, name: 'Contractor' },
]

export enum AccountTypes {
  Individual = 1,
  Contractor = 2
}


export enum Statuses {
  Active = 1,
  InActive = 2,
  InCart = 3,
  NotifyIfAvailable = 4,
  InMyOrders = 5,
  InSale = 6,
  Delivered = 7,
  Empty = 8,
  Processing = 9,
  Due = 10,
  Rejected = 11,
  Delivering = 12,
  VideoAttachment = 13
}


export const paymentMthods = [
  {
    id: 1,
    titleAr: 'تحويل مصرفي مباشر', titleEn: 'Direct bank transfer',
    descriptionAr: ' الرجاء استخدام معرف الطلب الخاص بك كمرجع الدفع. لن يتم شحن طلبك حتى يتم تصفية الأموال في حسابنا. الرجاء ارفاق صورة تثبت اتمام عملية الدفع',
    descriptionEn: 'Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. please upload payment proof'
  },
  {
    id: 2,
    titleAr: 'الدفع عند الاستلام', titleEn: 'Cash on delivery',
    descriptionAr: 'يعني أن عملية الدفع ستتأخر حتى يستلم العميل المنتج الذي طلبه عبر الإنترنت.',
    descriptionEn: 'means that the payment process shall be delayed until the customer receives the product he/she has ordered online.'
  },
  {
    id: 3,
    titleAr: 'بطاقة الائتمان', titleEn: 'Creidt Card',
    descriptionAr: '',
    descriptionEn: ''
  },
  {
    id: 4,
    titleAr: 'بطاقة مدى البنكية', titleEn: 'mada debit card',
    descriptionAr: '',
    descriptionEn: '',
  },
]
