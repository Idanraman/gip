import { Routes } from '@angular/router';
import { AppComponent } from './index';
import { UserloginComponent, UserafterloginComponent } from './layout'
import { NoAuthGuard } from '../app/user/home'
export const AppRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    { loadChildren: 'app/user/login/login.module#LoginModule', path: 'login', component: UserloginComponent },
    { loadChildren: 'app/user/home/home.module#HomeModule', path: 'home', component: UserafterloginComponent, canActivate: [NoAuthGuard] },
    { loadChildren: 'app/user/register/register.module#RegisterModule', path: 'register', component: UserloginComponent },
    { loadChildren: 'app/user/resetpassword/resetpassword.module#ResetpasswordModule', path: 'resetpassword', component: UserloginComponent }


];
