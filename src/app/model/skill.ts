export class Skill {
  id? : number;
  nombreS: string;
  tipoS : string;
  porcS : number;

  constructor(nombreS: string, tipoS: string, porcS : number){
    this.nombreS = nombreS;
    this.tipoS = tipoS;
    this.porcS = porcS;
  }
}
