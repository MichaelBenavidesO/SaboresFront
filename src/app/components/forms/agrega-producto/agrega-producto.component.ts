import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-producto',
  templateUrl: './agrega-producto.component.html',
  styleUrls: ['./agrega-producto.component.scss']
})
export class AgregaProductoComponent {
  addressForm = this.fb.group({
    nombre: [null, Validators.required],
    descripcion: [null, Validators.required],
    precio: [null, Validators.required],
    file: [null],
  });
  srcResult: any;



  constructor(private fb: FormBuilder,public service:ApiService) {}

  onSubmit(): void {
    this.service.getAll("Productoes");
     const producto={
      nombreProducto: this.addressForm.get('nombre')?.value,
      descripcion: this.addressForm.get('descripcion')?.value,
      imagen: "img",
      precio: this.addressForm.get('precio')?.value,
      estado: true,
     }
     this.service.post("Productoes",producto)
    Swal.fire(
      'Bienvenido!',
      'Registro exitoso',
      'success'
    )
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}
