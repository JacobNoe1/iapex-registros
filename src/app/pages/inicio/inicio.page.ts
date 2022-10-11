import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Persona } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';
import { LoginService } from '../inicio-sesion/services/login.service';
import { DatosUsuario } from '../inicio-sesion/interfaces/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  personaFinal: Persona;

  usuarioActivo: DatosUsuario;

  usuarioLimpio: DatosUsuario = {
    Nombre : "",
    ApellidoMaterno : "",
    ApellidoPaterno : ""
  }

  constructor( private alertController: AlertController,
               private _personaService: PersonaService,
               private _loginService: LoginService,
               private router: Router
               ) {
                this.usuarioActivo = this._loginService.usuarioActivo;
               }

                


  ngOnInit() {
  }

  llenarPersona() {
    this.personaFinal = this._personaService.formPersona;

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      // cssClass: 'my-custom-class',
      header: '¿Desea cerrar sesión?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.cerrarSesion();
          },
          cssClass: 'rojo'
        },
        {
        text: 'No',
        role: 'cancel',
        }
      ]
    });

    await alert.present();
  }

  cerrarSesion(){
    this._loginService.logout();
    this.router.navigate(['/inicioSesion']);
  }

}
