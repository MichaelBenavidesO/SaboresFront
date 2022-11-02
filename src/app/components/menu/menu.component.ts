import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioLogin } from 'src/app/modelsView/UsuarioLoginMV.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  user:UsuarioLogin;
  nombre="";
  constructor(private breakpointObserver: BreakpointObserver, public loginservice:LoginService,public router:Router) {
    this.user= JSON.parse(localStorage.getItem("Usuario"))
 
  }
  ngOnInit(): void{
   this.nombre=this.user.nombre;
  }
logout(){
  Swal.fire({
        icon: 'success',
        title: 'Hecho',
        text: 'Hasta luego'

  })
  this.loginservice.user.next(null);
  this.loginservice.login.next('logout');
  this.router.navigateByUrl('/Ingreso');
  localStorage.removeItem("Usuario")
}
}
