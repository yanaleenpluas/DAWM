import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent {
  data!: any;

  constructor(private route: ActivatedRoute) {
   
      this.route.params.subscribe(params => {
      let title = params['title']; 
      
      let proyectoAngular = JSON.parse(localStorage.getItem("proyectoAngular")!);

      if(proyectoAngular) {
        let autores = proyectoAngular as Array<any>
        console.log(autores) 
        let autoresfiltered = autores.filter(poemas => poemas.title == title)    
        console.log(autoresfiltered) 
        this.data = autoresfiltered[0];
        console.log(autoresfiltered)   
      }

    });

  }
}
