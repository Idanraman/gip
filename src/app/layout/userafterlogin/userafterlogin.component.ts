import { Component, OnInit } from '@angular/core';
import { EmployeeInfo } from '../../shared'
import { UserService } from '../../shared/service/loginapi/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistersService } from '../../shared/service/loginapi/register.service';
@Component({
  selector: 'app-userafterlogin',
  templateUrl: './userafterlogin.component.html',
  styleUrls: ['./userafterlogin.component.css']
})
export class UserafterloginComponent implements OnInit {
  _EmployeeInfo: EmployeeInfo;
  constructor(public _UserService: UserService, public router: Router, public _RegistersService: RegistersService) {
    this._EmployeeInfo = new EmployeeInfo();
  }

  ngOnInit() {
    this._EmployeeInfo.email = sessionStorage.getItem("EmployeeInfo");
    //this.GetUser();
  }
  //Logout event code here....!
  logout() {
    this._UserService.logOut("rest-auth/logout/").subscribe(data => { this.router.navigateByUrl('/'); });
  }
  // GetUser()
  // {
  //   debugger;
  //   this._RegistersService.GetUserDetails('rest-auth/user/').subscribe(data=>{console.log(data)})
  // }
}
