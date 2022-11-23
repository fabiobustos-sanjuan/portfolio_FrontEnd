export class Proyecto {
  id?: number;
  nombreP: string;
  descP: string;
  imgP: string;

  constructor(nombreP: string, descP: string, imgP: string){
    this.nombreP = nombreP;
    this.descP = descP;
    this.imgP = imgP;
  }
}
