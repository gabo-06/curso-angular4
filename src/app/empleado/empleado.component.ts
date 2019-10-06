import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit
{
    public titulo = "Componente Empleados";

    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;

    constructor()
    {
        this.empleado = new Empleado('David Lopez', 35, 'Cocinero', false);
        this.trabajadores = [
            new Empleado('Manolo Martinez', 35, 'Administrativo', true),
            new Empleado('Ana Lopez', 25, 'Cocinera', true),
            new Empleado('Victor Robles', 66, 'Programador', false)
        ];
        this.trabajador_externo = true;
    }

    ngOnInit()
    {
        console.log(this.trabajadores);
    }

    cambiarExterno(valor)
    {
        this.trabajador_externo = valor;
    }
}
