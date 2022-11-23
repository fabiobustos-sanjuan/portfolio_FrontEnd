export class Educacion {
  id? : number;
  nombreEsc : string;
  area : string;
  titulo : string;
  img : string;
  inicio : string;
  fin : string;

  constructor(nombreEsc: string, area: string, titulo: string, img: string, inicio: string, fin: string){
    this.nombreEsc = nombreEsc;
    this.area = area;
    this.titulo = titulo;
    this.img = img;
    this.inicio = inicio;
    this.fin = fin;

  }
}
