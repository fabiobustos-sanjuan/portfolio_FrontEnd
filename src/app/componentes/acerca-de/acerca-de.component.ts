import { TokenService } from 'src/app/servicios/token.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  //persona: persona[] = []
  //persona: persona = new persona("", "", "", "", "", "");
  persona: persona = null;

  constructor(public personaService: PersonaService,
    private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {  
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  
  }

  cargarPersona(): void{
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data})
  }

  /*ngOnInit(): void {
    this.personaService.Persona().subscribe(data => {this.persona = data})    
  }*/
}
