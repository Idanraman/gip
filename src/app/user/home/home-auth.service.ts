import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JwtService } from '../../shared'

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor(
        private router: Router, private _JwtService: JwtService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        // return this.userService.isAuthenticated.take(1).map(bool => !bool);        
        if (this._JwtService.getToken() != null) {
            return Observable.of(true);
        }
        else {
            this.router.navigateByUrl("login");
            return Observable.of(false);
        }
    }
}
