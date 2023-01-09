import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecursosPoemasService {

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get('https://poetrydb.org/linecount/6')
  }
}
