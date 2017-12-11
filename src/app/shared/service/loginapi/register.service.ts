import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject'
import { RegisterInfo, ChangePassWord, UserInfo } from '../../model';
import { ApiService } from '../api.service';// It's for get set token
import { JwtService } from '../jwt.service'; //dirstory token method


@Injectable()

export class RegistersService {

  //constructor for create object for class then create all object for service like...
  constructor(private apiService: ApiService, private http: Http, private jwtService: JwtService) { }

  //Register Codee here.......
  RegisterInsertUpdate(route, _RegisterInfo: RegisterInfo): Observable<RegisterInfo> {
    let body = { email: _RegisterInfo.email, password1: _RegisterInfo.password1, password2: _RegisterInfo.password2 }
    return this.apiService.post(route, body)
      .map(data => data);
  }
  Verifyemail(route) {
    return this.apiService.get(route)
      .map(data => data);
  }
  Resetpassword(route, _RegisterInfo: RegisterInfo) {
    let body = { email: _RegisterInfo.email }
    return this.apiService.post(route, body)
      .map(data => data);
  }
  ChangePassword(route, _ChangePassWord: ChangePassWord) {
    let body = { old_password: _ChangePassWord.old_password, new_password1: _ChangePassWord.new_password1, new_password2: _ChangePassWord.new_password2 }

    return this.apiService.post(route, body)
      .map(data => data);
  }
  GetUserDetails(route): Observable<UserInfo> {
    return this.apiService.GetWithToken(route).map(data => data);
  }
}

