import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregaProductoComponent } from './components/agrega-producto/agrega-producto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/forms/login/login.component';
import { ModificaUsuarioComponent } from './components/forms/modifica-usuario/modifica-usuario.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RealizaPreguntaComponent } from './components/realiza-pregunta/realiza-pregunta.component';
import { RealizaReservaComponent } from './components/realiza-reserva/realiza-reserva.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'Registro', component: RegisterComponent},
  {path:'Ingreso', component: LoginComponent},
  {path:'ResumenRestaurante', component: DashboardComponent},
  {path:'RealizaReserva', component: RealizaReservaComponent},
  {path:'RealizaPregunta', component: RealizaPreguntaComponent},
  {path:'ModificaUsuario', component: ModificaUsuarioComponent},
  {path:'RegistroVenta', component: DashboardComponent},
  {path:'AgregaProducto', component: AgregaProductoComponent},
  {path:'ModificaProducto', component: ProductosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
