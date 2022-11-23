import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/servicios/s-skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];
  
  constructor(private sSkill: SSkillService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarskill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarskill(): void {    
    this.sSkill.lista().subscribe(data => {this.skill = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sSkill.delete(id).subscribe(
        data => {
          this.cargarskill();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }

}
