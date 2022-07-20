export class persona{
  id?: number;  /* El signo de pregunta indica que ese dato no es necesario... */
  nombre: String;
  apellido: String;
  img: String;

  constructor(nombre: String, apellido: String, img: String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
  }

}