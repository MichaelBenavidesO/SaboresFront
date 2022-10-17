import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-realiza-pregunta',
  templateUrl: './realiza-pregunta.component.html',
  styleUrls: ['./realiza-pregunta.component.scss']
})
export class RealizaPreguntaComponent {
  cedula = "1000514245";
  addressForm = this.fb.group({
    cedula: null,
    pregunta: [null, Validators.required],


  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
