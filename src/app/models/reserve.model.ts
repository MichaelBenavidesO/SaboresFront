import { Time } from "@angular/common";

export interface reserva
{
idUsuario: number;
idSede: number;
fechaReserva:Date;
cantidadPersonas: number;
evento: string;
hora: Time;
activo: boolean;
}