import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/servicios/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreS: string = '';
  tipoS : string = '';
  //porcS : number = null;
  porcS : any;

  constructor(private sSkill: SSkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombreS, this.tipoS, this.porcS);
    this.sSkill.save(skill).subscribe(
      data=>{
        alert("Skill añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló Skill");
        this.router.navigate(['']);
      }
      )
  }

}
