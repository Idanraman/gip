import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class JwtService {
  constructor(
    private router: Router
  ) { }
  private getCookie(name) {

    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }
  getToken(): String {
    return window.localStorage['jwtToken'];
  }
  getCsrt(): String {
    return window.localStorage['csrftoken'];
  }

  saveToken(token: String) {
    window.localStorage['csrftoken'] = this.getCookie('csrftoken');
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('csrftoken');
    window.localStorage.removeItem('jwtToken');
  }

  getError(): String {
    return window.localStorage['jwtToken'];
  }

  saveError(Error: String) {
    window.localStorage['jwtError'] = Error;
  }

  destroyError() {
    window.localStorage.removeItem('jwtError');
  }

}
