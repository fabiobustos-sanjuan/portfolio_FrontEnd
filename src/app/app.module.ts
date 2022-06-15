import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import {HttpClientModule} from '@angular/common/http';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ScrollToTopComponent } from './componentes/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LogoComponent,
    AcercaDeComponent,
    FormacionComponent,
    ProyectosComponent,
    PiePaginaComponent,
    HysComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
