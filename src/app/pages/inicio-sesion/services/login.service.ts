import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DatosUsuario, Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _usuario!: DatosUsuario;

  private _ok: boolean = false; 

  constructor(private http: HttpClient) { }

  get ok() {
    return this._ok;
  }
  
  get usuarioActivo() {
    return { ... this._usuario };
  }
  set usuarioActivo(usuarioLimpio: DatosUsuario) {
    this.usuarioActivo = usuarioLimpio;
  }
 
  login( usuario: string, contrasena: string ) {
    this.logout();
    // Línea 32 se cambia la url por la url de la api de netcore
    // const url  = "http://localhost:5000/api/Login/Movil";
    // Línea nueva
    const url  = "https://iapex-api.herokuapp.com/api/Login/Movil";
    const body = { usuario, contrasena };
  
    //console.log("BODY",body);
    return this.http.post<Response>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.Ok ) {
            localStorage.setItem('token', resp.Token! );
            //console.log(resp);
            this._usuario = resp.DatosUsuario!;
            if(resp.Ok === "true"){
              this._ok = true;
            }
          }
        }),
        map( resp => resp.Ok ),
        catchError( err => of(err.error.msg) )
      );
  } 

  validarToken() {
    return this._ok;
  }

  

  logout() {
    localStorage.clear();
  }
}

