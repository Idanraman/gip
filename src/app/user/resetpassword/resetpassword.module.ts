import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResetpasswordRoutes } from './resetpassword.routing';
import { ResetpasswordComponent } from '../resetpassword';
import { UserService } from '../../shared/service/loginapi/user.service'
import { RegistersService } from '../../shared/service/loginapi/register.service'
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ResetpasswordRoutes),
        FormsModule
    ],
    declarations: [ResetpasswordComponent],
    providers: [UserService, RegistersService]
})
export class ResetpasswordModule { }
