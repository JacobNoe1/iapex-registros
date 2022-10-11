import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  form: FormGroup;
  
  loading = false;
  constructor(private _loginService: LoginService, private fb: FormBuilder,
    private router: Router,
    public toastController: ToastController) 
  {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login() {
    //console.log(this.form.value)
    const { usuario, contrasena } = this.form.value;

    this._loginService.login( usuario, contrasena )
      .subscribe( ok => {

        if ( ok === "true" ) {
          this.fakeLoading();
          //console.log(this.form.value);
        } else {
          this.error();
          this.form.reset();
        }
      }
      );
  }

  error(){
    this.msgError();
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/inicio'])
      this.loading = false;
      this.bienvenida();
    }, 1500)
  }

  async bienvenida() {
    const toast = await this.toastController.create({
      message: 'Bienvenido',
      duration: 2000
    });
    toast.present();
  }



  async msgError() {
    const toast = await this.toastController.create({
      message: 'Datos incorrectos',
      duration: 2000
    });
    toast.present();
  }

}
