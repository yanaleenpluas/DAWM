import { Component } from '@angular/core';

@Component({
  selector: 'app-poemas',
  templateUrl: './poemas.component.html',
  styleUrls: ['./poemas.component.css']
})
export class PoemasComponent {
  obtenerDatos: any[] = [];

 /* Leer desde el localStorage */
 constructor() {

  /* Leer desde el localStorage */
  let proyectoAngular = JSON.parse(localStorage.getItem("proyectoAngular")!);
    
  if(proyectoAngular) {
    this.obtenerDatos = proyectoAngular as any[]
    console.log(this.obtenerDatos[0].title)  
  }
  
}
}
