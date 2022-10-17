import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-realiza-reserva',
  templateUrl: './realiza-reserva.component.html',
  styleUrls: ['./realiza-reserva.component.scss']
})
export class RealizaReservaComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    sede: [null, Validators.required],
    motivo: [null, Validators.required],
    hora: [null, Validators.compose([
      Validators.required, Validators.min(12), Validators.max(18)])
    ],
    fecha: [null, Validators.required],

    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  sedes = [
    {name: null},
    {name: 'Cra 24 # 73-09 3 pisos'},
    {name: 'Calle 44 # 54-52 aire libre'},
    {name: 'Calle 44 # 59-74 gourmet'},
    {name: 'Av Jiménez # 8A-12'}
  ];

  motivos = [
    {name: null},
    {name: 'Cumpleaños'},
    {name: 'Aniversario'},
    {name: '15 años'},
    {name: 'Boda'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
