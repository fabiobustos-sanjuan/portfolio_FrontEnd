import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  descP: string = '';
  imgP: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  OnCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.descP, this.imgP);
    this.sProyecto.save(proyecto).subscribe(
      data=>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló crear proyecto");
        this.router.navigate(['']);
      }
    )
  }  

}
