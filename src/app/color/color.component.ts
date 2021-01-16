import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color:String = "";

  generarNumero():String {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorGenerado():String {
    this.color = "#" + this.generarNumero() + this.generarNumero() + this.generarNumero();

    return this.color;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
