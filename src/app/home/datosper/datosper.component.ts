import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-datosper',
  templateUrl: './datosper.component.html',
  styleUrls: ['./datosper.component.scss'],
})
export class DatosperComponent   {
loginForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    
    this.loginForm = this.fb.group({
  });

  
}

}