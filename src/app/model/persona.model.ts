export class persona{
  id?: number;
  nombre: String;
  apellido: String;
  email: String;
  imgs: String;
  imgl: String;
  about: String;

  constructor(nombre: String, apellido: String, email: String, imgs: String, imgl:String, about: String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.imgs = imgs;
    this.imgl = imgl;
    this.about = about;
  }

}