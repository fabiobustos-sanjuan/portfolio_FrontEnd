import { Component, OnInit } from '@angular/core';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  educacion: Educacion[] = [];  
  constructor(private sEducacion: SEducacionService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data => {this.educacion = data;})
  }

  borrar(id?:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
