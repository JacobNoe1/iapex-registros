import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionPageRoutingModule } from './inicio-sesion-routing.module';

import { InicioSesionPage } from './inicio-sesion.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InicioSesionPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    

  ],
  declarations: [InicioSesionPage]
})
export class InicioSesionPageModule {}