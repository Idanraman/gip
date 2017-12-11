import { Routes } from '@angular/router';
import { NoAuthGuard, UsersettingComponent,HomeComponent } from '../home';

export const HomeRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usersetting', component: UsersettingComponent }
];
