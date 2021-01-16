import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ColorComponent } from './color/color.component';
import { InicioComponent } from './inicio/inicio.component';

import {TabMenuModule} from 'primeng/tabmenu';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InfoComponent } from './info/info.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

export const routes: Routes = [
  {path: "", component: InicioComponent, pathMatch: "full" }
]

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ColorComponent,
    InicioComponent,
    EncabezadoComponent,
    InfoComponent,
    ListaLibrosComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
