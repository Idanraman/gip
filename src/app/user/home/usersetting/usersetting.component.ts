import { Component, OnInit, ElementRef } from '@angular/core';
import { ChangePassWord, JwtService } from '../../../shared';
import { RegistersService } from '../../../shared/service/loginapi/register.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-usersetting',
  templateUrl: './usersetting.component.html',
  styleUrls: ['./usersetting.component.css']
})
export class UsersettingComponent implements OnInit {
  _ChangePassWord: ChangePassWord;
  constructor(public _RegistersService: RegistersService, private elRef: ElementRef, public router: Router) {
    this._ChangePassWord = new ChangePassWord()
  }
  ngOnInit() {
    document.getElementById("old_password").focus();
  }
  PostChangePassword() {
    var hElement: HTMLElement = this.elRef.nativeElement;
    if (this.Required()) {
      this._RegistersService.ChangePassword("rest-auth/password/change/", this._ChangePassWord).subscribe(data => { debugger }
        , error => { hElement.getElementsByTagName('p')[2].innerText = error.type === "error" ? "error" : error["non_field_errors"][0] });      
      //this._RegistersService.GetUserDetails('rest-auth/user/').subscribe(data=>{console.log(data)})
    }
    else {
      setTimeout(() => {
        this.clear();
      }, 2000);
    }
  }
  //required filed validation here....!
  Required() {

    var boolean = true;
    var hElement: HTMLElement = this.elRef.nativeElement;
    var allDivs = hElement.getElementsByClassName('required');
    for (var i = 0; i < hElement.getElementsByTagName('p').length; i++) {
      hElement.getElementsByTagName('p')[i].innerText = '';
    }
    for (var i = 0; i < allDivs.length; i++) {
      if (allDivs[i]['value'].replace(' ', '').length === 0) {
        hElement.getElementsByTagName('p')[i].innerText = allDivs[i]['id'] + ' is Compalsory..';
        boolean = false;
      }
    }
    if (boolean) {
      if (this._ChangePassWord.new_password1 !== this._ChangePassWord.new_password2) {
        hElement.getElementsByTagName('p')[2].innerText = "password1 or passowrd2 dsoesn't Match.....!!";
        boolean = false;
      }
    }
    return boolean;
  }
  //clear code here...!
  clear() {
    var hElement: HTMLElement = this.elRef.nativeElement;
    var allDivs = hElement.getElementsByClassName('required');
    for (var i = 0; i < hElement.getElementsByTagName('p').length; i++) {
      hElement.getElementsByTagName('p')[i].innerText = '';
    }
  }
}
