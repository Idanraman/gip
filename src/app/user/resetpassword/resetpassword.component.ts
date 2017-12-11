import { Component, OnInit } from '@angular/core';
import { RegisterInfo, JwtService } from '../../shared';
import { RegistersService } from '../../shared/service/loginapi/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  _RegisterInfo: RegisterInfo;
  _ErrorEmail: string;
  constructor(private _RegistersService: RegistersService, public router: Router, public _JwtService: JwtService) {
    this._RegisterInfo = new RegisterInfo();
  }
  ngOnInit() {
    this._ErrorEmail = "";
  }
  Clear() {
    setTimeout(() => {
      this._ErrorEmail = "";
      this._RegisterInfo = new RegisterInfo();
    }, 4000);
  }
  //send button click event..
  Getauthentication() {
    if (this.Valid()) {
      this._RegistersService.Resetpassword("rest-auth/password/reset/", this._RegisterInfo).subscribe(data => {
        this._ErrorEmail = data.detail
      },
        error => { this._ErrorEmail = error["non_field_errors"][0]; sessionStorage.removeItem('RegisterInfo'); });
    }

  }
  //Validation for Email id and password..
  Valid() {
    var boolean = true;
    if (this._RegisterInfo.email == undefined) {
      this._ErrorEmail = "Please enter email..!!";
      boolean = false;
    }
    else if (this._RegisterInfo.email.length == 0) {
      this._ErrorEmail = "Please enter email..!!";
      boolean = false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this._RegisterInfo.email.match(mailformat)) {
      this._ErrorEmail = "You have entered an invalid email address!";
      boolean = false;
    }
    this.Clear();
    return boolean;
  }
}
