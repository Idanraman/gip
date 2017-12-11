import { Routes } from '@angular/router';
import { ResetpasswordComponent } from './resetpassword.component';

export const ResetpasswordRoutes: Routes = [
    {
        path: '',
        children: [ {
            path: '',
            component: ResetpasswordComponent
        }]
         
    }
];
