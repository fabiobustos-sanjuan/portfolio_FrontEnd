import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {  
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
      {this.persona = data;})
  }

}
