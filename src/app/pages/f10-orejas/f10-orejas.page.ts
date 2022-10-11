import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f10-orejas',
  templateUrl: './f10-orejas.page.html',
  styleUrls: ['./f10-orejas.page.scss'],
})
export class F10OrejasPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  tipo: string = '';

  ngOnInit() {
  }

  miForm: FormGroup = this.fb.group({
    'tipo': [ '' , []]
  })

  enviarOrejas(){
    this.tipo = this.miForm.controls['tipo'].value;
    this._personaService.obtenerOrejas(this.tipo);
    this.crearRegistro();
    this._personaService.limpiarFormulario();
  }

  crearRegistro(){
    this._personaService.postPersonaDesaparecida().subscribe(
      resp=> {
        console.log("RESP", resp)
      },
      error => {
        console.log("Error", error)
      }
    )
  }
}
