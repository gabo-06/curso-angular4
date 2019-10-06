import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html',
    styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit
{

    public nombre_componente = 'Componente de fruta';
    public listado_componente = 'Naranja, Manzana, Pera y Sandia';

    public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<string>;
    comodin: any;

    constructor()
    {
        this.nombre = "David";
        this.edad = 30;
        this.mayorDeEdad = true;
        this.trabajos = ['Carpintero', 'Albañil', 'Fontanero'];
        this.comodin = 'Cualquier cosa';
    }

    ngOnInit()
    {
        this.cambiarNombre();
        this.cambiarEdad(45);
        // alert(`Me llamo ${this.nombre} y tengo ${this.edad} años`);

        // Variables y alcance
        var uno = 8;
        var dos = 15;

        if (uno === 8)
        {
            let uno = 3;
            var dos = 88;
            console.log(`DENTRO DEL IF ${uno} ${dos}`);
        }

        console.log(`DENTRO DEL IF ${uno} ${dos}`);
    }

    cambiarNombre()
    {
        this.nombre = "Juan Lopez";        
    }

    cambiarEdad(edad)
    {
        this.edad = edad;        
    }
}
