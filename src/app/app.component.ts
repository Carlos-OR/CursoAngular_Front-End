import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';

  text1:boolean = false;
  text2:boolean = false;

  color:String="";

  juegosMobile:Array<Object>;

  constructor(){
    this.juegosMobile = [
      {id:1, titulo:"Call of Duty: Mobile", desarrolladores: "TiMi Studios, Tencent Games"},
      {id:2, titulo:"Clash of Clans", desarrolladores: "Supercell"},
      {id:3, titulo:"Brawl Stars", desarrolladores: "Supercell"},
      {id:4, titulo:"Clash Royale", desarrolladores: "Supercell"}
    ]
  }
}
