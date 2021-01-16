import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { 
    this.items = [
      {label: 'Inicio', icon: 'pi pi-fw pi-home'},
      {label: 'Informacion', icon: 'pi pi-fw pi-info-circle'},
      {label: 'Otros', icon: 'pi pi-fw pi-search-plus'}
    ];

    this.activeItem = this.items[0];
  }

  ngOnInit(): void {
  }

}
