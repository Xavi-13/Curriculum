
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datosacad',
  templateUrl: './datosacad.component.html',
  styleUrls: ['./datosacad.component.scss'],
})
export class DatosacadComponent implements OnInit {
  datosForm: FormGroup;

  constructor(private fb: FormBuilder,private apiService: ApiService) {
    this.datosForm = this.fb.group({
      perfil: ['', [Validators.required]],
      instituciones: ['', [Validators.required]],
      gradoaca: ['', [Validators.required]],
      disciplina: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaTermino: ['', [Validators.required]],
      idiomaSeleccionado: ['', [Validators.required]],
      nivelDominio: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });
  }

  get perfilNoValido() {
    return this.datosForm.get('perfil')?.invalid && this.datosForm.get('perfil')?.touched;
  }

  get institucionesNoValido() {
    return this.datosForm.get('instituciones')?.invalid && this.datosForm.get('instituciones')?.touched;
  }

  get gradoacaNoValido() {
    return this.datosForm.get('gradoaca')?.invalid && this.datosForm.get('gradoaca')?.touched;
  }

  get disciplinaNoValido() {
    return this.datosForm.get('disciplina')?.invalid && this.datosForm.get('disciplina')?.touched;
  }

  get fechaInicioNoValido() {
    return this.datosForm.get('fechaInicio')?.invalid && this.datosForm.get('fechaInicio')?.touched;
  }

  get fechaTerminoNoValido() {
    return this.datosForm.get('fechaTermino')?.invalid && this.datosForm.get('fechaTermino')?.touched;
  }

  get idiomaSeleccionadoNoValido() {
    return this.datosForm.get('idiomaSeleccionado')?.invalid && this.datosForm.get('idiomaSeleccionado')?.touched;
  }

  get nivelDominioNoValido() {
    return this.datosForm.get('nivelDominio')?.invalid && this.datosForm.get('nivelDominio')?.touched;
  }

  get imagenNoValido() {
    return this.datosForm.get('imagen')?.invalid && this.datosForm.get('imagen')?.touched;
  }

  ngOnInit() {}

  guardar() {
    if (this.datosForm.valid) {
      console.log('Datos guardados:', this.datosForm.value);
    } else {
      this.datosForm.markAllAsTouched();
      console.log('Formulario inválido');
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.datosForm.patchValue({ imagen: file });
    this.datosForm.get('imagen')?.updateValueAndValidity();
    console.log('Archivo seleccionado:', file);
  }

  uploadFile() {
    console.log('Subir archivo...');
    // Aquí puedes agregar la lógica para subir el archivo al servidor o manejarlo de otra manera.
  }
  registros(){
    this.apiService.obtenerDatosAPI().subscribe(data=>{
      console.log(data)}); 
   }
}
