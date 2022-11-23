import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PiePaginaComponent implements OnInit {

  @Output() scrollToTop = new EventEmitter<void>();

 constructor() { }

 ngOnInit(): void {
  }

}
