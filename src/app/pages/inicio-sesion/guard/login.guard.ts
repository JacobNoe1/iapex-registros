import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {
  constructor( private _loginServices: LoginService,
    private router: Router ){}

  canActivate(): Observable<boolean> | boolean {
    if(this._loginServices.ok == true){
      return this._loginServices.validarToken()
    }
    else{
      this.router.navigateByUrl('/inicioSesion');
    }
  }

  canLoad(): Observable<boolean> | boolean {
    if(this._loginServices.ok == true){
      return this._loginServices.validarToken()
    }
    else{
      this.router.navigateByUrl('/inicioSesion');
    }
  }
}
