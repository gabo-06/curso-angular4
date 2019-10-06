export class Empleado
{    
    // public nombre: string;
    // public edad: number;
    // public cargo: string;
    // public contratado: boolean;

    // constructor(nombre, edad, cargo, contratado)
    // {
    //     this.nombre = nombre;
    //     this.edad = edad;
    //     this.cargo = cargo;
    //     this.contratado = contratado;
    // }

    // Esto automaticamente inicializa la propiedad 
    // y le asigna un valor que le llega por parámetro.
    // Con esto se ahorra escribir el código de arriba.
    constructor(
        public nombre: string,
        public edad: number,
        public cargo: string,
        public contratado: boolean
    ){}
}