import { Component, inject } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})

export class ExpansionComponent {
  

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = false;
  constructor(private _formBuilder: FormBuilder, public _snackBar: MatSnackBar) {}

  panelOpenState = false;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  longText = `Este proyecto fue creado con fines demostrativos de los elementos de angular material por lo cual este proyecto no es para uso comercial solo fines educativos`;

  mostrarSnackbar() {
    this._snackBar.open('Enviado', 'Cerrar', {
      duration: 2000,
    });
   }

}
