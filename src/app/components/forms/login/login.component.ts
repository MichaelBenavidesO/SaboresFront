import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalTemplateService } from 'src/app/services/modal-template.service';
import Swal from 'sweetalert2';
import { ModalTemplateComponent } from '../../modal-template/modal-template.component';
import { UsuarioLogin } from '../../../modelsView/UsuarioLoginMV.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  addressForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],

  });
em="";
pass="";
user:UsuarioLogin;

  constructor(
    public modalservice: ModalTemplateService,
    private fb: FormBuilder,
    public api: ApiService,
    public dialog: MatDialog,
    public loginservice:LoginService,
    public router:Router,
    ) {}

  async onSubmit() {

    this.em = this.addressForm.controls.email.value;
    this.pass = this.addressForm.controls.password.value;

    //console.log((this.api.login('Usuarios', this.em, this.pass)))
    var DataResponse:UsuarioLogin = await (this.api.login('Usuarios', this.em, this.pass))
    this.user=DataResponse[0];

    if(this.em!=this.user.correoElectronico || this.pass!=this.user.contrasena){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La información ingresada es incorrecta!'
      })
    }

    if(this.em==this.user.correoElectronico && this.pass==this.user.contrasena){

      Swal.fire({
        icon: 'success',
        title: 'Hecho',
        text: 'Logueo exitoso'

      })
      localStorage.setItem("Usuario", JSON.stringify(this.user));
      this.router.navigateByUrl('/ResumenRestaurante');
      this.loginservice.user.next(this.user);
      this.loginservice.login.next('login');
    }



  }

  modal() {
    this.modalservice.titulo="nuevo usuario",
    this.modalservice.accion="Registrar",
    this.dialog.open(ModalTemplateComponent,{
      width:'auto',
      height:'auto'

    });
  }
}

