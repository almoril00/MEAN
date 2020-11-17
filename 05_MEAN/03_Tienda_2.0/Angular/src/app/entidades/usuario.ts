
export class Usuario {

    public constructor(
        public _id       : string = null,
        public login     : string = null,
        //
        //A VER QUE PASA CON ESTO:
        //
        public pw        : string = null,
        public nombre    : string = null,
        //¿necesitamos realmente el rol?
        public rol       : string = null,
        public correoE   : string = null,
        public direccion : string = null,
        public telefono  : string = null,
        public idioma    : string = null
     ){ 
     }

}
