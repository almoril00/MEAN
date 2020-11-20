
export class Producto {

    public constructor(
        public _id         : string = null,
        public referencia  : string = null,
        public categoria   : string = null,
        public nombre      : string = null,
        public fabricante  : string = null,
        public descripcion : string = null,
        public imagen      : string = null,
        public existencias : number = null,
        public precio      : number = null
    ){
    }
}

/*
export class Producto {
    public _id!: string;
    public referencia!: string;
    public categoria!: string;
    public nombre!: string;
    public fabricante!: string;
    public descripcion!: string;
    public imagen!: string;
    public existencias!: Number;
    public precio!: Number;
}
*/
