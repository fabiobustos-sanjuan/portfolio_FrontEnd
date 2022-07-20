import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  miPortfolio:any;
  persona: persona = new persona("","","");
  /*constructor(private datosPortfolio:PortfolioService) { }*/
  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    /*this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });*/
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
