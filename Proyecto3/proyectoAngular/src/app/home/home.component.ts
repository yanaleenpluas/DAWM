import { Component } from '@angular/core';
import { RecursosPoemasService } from '../servicios/recursos-poemas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private recursosPoemasService: RecursosPoemasService) {
  }

  ngOnInit() {
    this.recursosPoemasService.obtenerDatos().subscribe(response => {
      
      let proyectoAngular = localStorage.getItem("proyectoAngular");
      if(!proyectoAngular) {
        localStorage.setItem("proyectoAngular", JSON.stringify(response));
      }

    })
  }

}
