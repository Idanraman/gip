import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutes } from './home.routing';
import { HomeComponent, NoAuthGuard,UsersettingComponent } from '../home';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
  ],
  declarations: [HomeComponent,UsersettingComponent],
  providers: [NoAuthGuard]
})
export class HomeModule { }
