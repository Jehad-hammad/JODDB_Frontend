import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import decode from 'jwt-decode';
import { AuthorizeService } from './authorize.service';
import { isArray } from 'util';
@Injectable()
export class RoleGuard implements CanActivate {

  constructor(public auth: AuthorizeService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem(environment.token);
    // decode the token to get its payload
    if (token) {
      var tokenPayload = decode(token);
    }
    else {
      this.router.navigate(['/auth/login']);
      return false;
    }


    var roleClaim = tokenPayload[environment.roleClaim]

    if (!this.auth.isAuthenticated()
      || (isArray(roleClaim) && !expectedRole.some(expRole => roleClaim.some(role => role == expRole)))
      || (!isArray(roleClaim) && !expectedRole.some(expRole => expRole == roleClaim))) {

      console.log("Unauthorized");
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
