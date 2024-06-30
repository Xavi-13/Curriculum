import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {}
  datosaca() { 
    this.ruta.navigate(['home/datosaca']); 
      } 
  datosper() { 
  this.ruta.navigate(['home/datosper']); 
      } 
  certif() { 
  this.ruta.navigate(['home/certif']); 
      } 
  exper() { 
  this.ruta.navigate(['home/exper']); 
      } 
  proy() { 
  this.ruta.navigate(['home/proy']); 
      } 
  public() { 
  this.ruta.navigate(['home/public']); 
      } 
}
