import { Component, OnInit, ElementRef } from '@angular/core';
import { RegisterInfo } from '../../shared';
import { RegistersService } from '../../shared/service/loginapi/register.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  _RegisterInfo: RegisterInfo;
  _ErrorEmail: string;
  _ErrorPassword: string;
  constructor(private _RegistersService: RegistersService, private elRef: ElementRef, public router: Router) {
  }
  ngOnInit() {
    this._RegisterInfo = new RegisterInfo();
    document.getElementById("email").focus();
  }
  //register code here....
  PostRegister() {
    var hElement: HTMLElement = this.elRef.nativeElement;
    if (this.Required()) {
      this._RegistersService.RegisterInsertUpdate("rest-auth/registration/", this._RegisterInfo).subscribe(data => { this.router.navigateByUrl('home'); }
        , error => { hElement.getElementsByTagName('p')[2].innerText = error["non_field_errors"][0] });
    }
    else {
      setTimeout(() => {
        this.clear();
      }, 2000);
    }
  }
  //required validation here.....
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
      if (this._RegisterInfo.password1 !== this._RegisterInfo.password2) {
        hElement.getElementsByTagName('p')[2].innerText = "password1 or passowrd2 dsoesn't Match.....!!";
        boolean = false;
      }
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this._RegisterInfo.email.match(mailformat)) {
        hElement.getElementsByTagName('p')[0].innerText = "You have entered an invalid email address!";
        boolean = false;
      }
    }
    
    return boolean;
  }
  //clear code.....!
  clear() {
    var hElement: HTMLElement = this.elRef.nativeElement;
    var allDivs = hElement.getElementsByClassName('required');
    for (var i = 0; i < hElement.getElementsByTagName('p').length; i++) {
      hElement.getElementsByTagName('p')[i].innerText = '';
    }
  }
  //Back to login code...
  MayBeOtherDay() {
    this.router.navigateByUrl('login');
  }
  //Enter Key event
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.PostRegister();
    }
  }
}
