import { Component } from '@angular/core';
import { RecursoBooksService } from 'src/app/servicios/recurso-books.service';
import {Books} from 'src/app/interfaz/books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  title = 'Angular';
  books: Books[]=[]
  constructor(private recursoBooksService: RecursoBooksService) {
    recursoBooksService.obtenerDatos().subscribe(respuesta => {
      this.books = respuesta as Array<Books>
    })
  }
}
