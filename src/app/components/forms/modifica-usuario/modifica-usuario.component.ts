import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuarioLogin } from 'src/app/modelsView/UsuarioLoginMV.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modifica-usuario',
  templateUrl: './modifica-usuario.component.html',
  styleUrls: ['./modifica-usuario.component.scss']
})
export class ModificaUsuarioComponent {
  public files: any =[]
  loading: boolean;
  nombres=""
  apellidos=""
  identificacion=""
  email=""
  ruta="../../../assets/imgs/img_avatar.png"
  addressForm = this.fb.group({

    nombres: '',
    apellidos: '',
    identificacion:'',

    email: '',
    password:'',
    passwordr:''
  });
  srcResult: any;
  user:UsuarioLogin;
  constructor(
    private fb: FormBuilder,
    public sanitizer: DomSanitizer,
    public api: ApiService,
    ) {
    this.user= JSON.parse(localStorage.getItem("Usuario"))
    this.nombres= this.user.nombre,
    this.apellidos= this.user.apellido,
    this.identificacion= String(this.user.documentoIdentidad),
    this.email= this.user.correoElectronico
  }

  onSubmit(): void {

  }

  onFileSelected(event: any) {
    const imagen = event.target.files[0];
    console.log(imagen);
    this.files.push(imagen)
    this.blobFile(imagen).then((res: any) => {
        this.ruta = res.base;
    })
    console.log(this.ruta);
  }

  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })


}
