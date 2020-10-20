

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
  
class Pelicula {

    //public titulo:String
    //public genero:String
    //public director:String
  
    public constructor(public titulo:String=null, 
                       public genero:String=null, 
                       private director:String=null){
      //this.titulo   = titulo
      //this.genero   = genero
      //this.director = director
    }
  
}
  



  
  let p1:Pelicula = new Pelicula()
  //p1.titulo = "2001"
  //p1.genero = "CiFi"
  //p1.director = "SK"
  console.log(p1)
  
  let p2:Pelicula = new Pelicula("Indiana Jones","Aventuras","SS")
  console.log(p2)
  console.log(p2.titulo)
  console.log(p2.genero)
  console.log(p2.director)
  
  
  
  
  