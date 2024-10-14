export const environment = {
  production: false,
  apiPreLink: 'https://localhost:7131/api/',  
  token: 'acessToken',
  roleClaim: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
  addressClaim: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/streetaddress',
  mobileClaim: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone',
  userName: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
  idClaim: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier',
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
