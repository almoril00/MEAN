import { Usuario } from "./usuario";

export class Tarea{

    public constructor(
        public _id         : string  = null,
        public titulo      : string  = null,
        public descripcion : string  = null,
        public prioridad   : string  = null,
        public estado      : string  = null,
        public usuario     : {
                        idUsuario : string,
                        nombre    : string
                    } = null       
    ){        
    }
}

