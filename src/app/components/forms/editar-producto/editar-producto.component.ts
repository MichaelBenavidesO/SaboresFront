import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { ModalTemplateService } from 'src/app/services/modal-template.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {
 id=""
 nombre=""
 descripcion=""
 precio=""
  addressForm = this.fb.group({
    nombre: [null, Validators.required],
    descripcion: [null, Validators.required],
    precio: [null, Validators.required],
    file: [null],
  });
  srcResult: any;

  ngOnInit(): void {
     this.id=this.modalservice.element["id"]
     this.nombre = this.modalservice.element["nombre"]
     this.descripcion=this.modalservice.element["descripcion"]
     this.precio=this.modalservice.element["precio"]
  }

  constructor(private fb: FormBuilder,public service:ApiService,public modalservice: ModalTemplateService) {}

  onSubmit(): void {
    this.service.getAll("Productoes");
     const producto={
      nombreProducto: this.addressForm.get('nombre')?.value,
      descripcion: this.addressForm.get('descripcion')?.value,
      imagen: "img",
      precio: this.addressForm.get('precio')?.value,
      estado: true,
     }
     console.log(producto)
     this.service.update("Productoes",producto,parseInt(this.id))
    Swal.fire(
      'Producto actualizado!',
      'Correctamente',
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
