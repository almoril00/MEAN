/*
class Pelicula {

    public titulo:String
    public genero:String
    public director:String
  
    public constructor(titulo:String=null, genero:String=null, director:String=null){
      this.titulo   = titulo
      this.genero   = genero
      this.director = director
    }
  
}
*/
var Pelicula = /** @class */ (function () {
    //public titulo:String
    //public genero:String
    //public director:String
    function Pelicula(titulo, genero, director) {
        if (titulo === void 0) { titulo = null; }
        if (genero === void 0) { genero = null; }
        if (director === void 0) { director = null; }
        this.titulo = titulo;
        this.genero = genero;
        this.director = director;
        //this.titulo   = titulo
        //this.genero   = genero
        //this.director = director
    }
    return Pelicula;
}());
var p1 = new Pelicula();
//p1.titulo = "2001"
//p1.genero = "CiFi"
//p1.director = "SK"
console.log(p1);
var p2 = new Pelicula("Indiana Jones", "Aventuras", "SS");
console.log(p2);
