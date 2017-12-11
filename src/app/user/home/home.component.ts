import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistersService } from '../../shared/service/loginapi/register.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public _RegistersService: RegistersService) { }
  
  ngOnInit() {    
    debugger;
   
  }
  LogOut() {
    this.router.navigateByUrl('login');
  }
  // GetUser()
  // {
  //   this._RegistersService.GetUserDetails('rest-auth/user/').subscribe(data=>{console.log(data)})
  // }
}
