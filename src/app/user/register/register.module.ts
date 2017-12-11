import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterRoutes } from './register.routing';
import { RegisterComponent } from '../register';
import { UserService } from '../../shared/service/loginapi/user.service'
import { RegistersService } from '../../shared/service/loginapi/register.service'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegisterRoutes),
    FormsModule
  ],
  declarations: [RegisterComponent],
  providers: [UserService,RegistersService]
})
export class RegisterModule { }
