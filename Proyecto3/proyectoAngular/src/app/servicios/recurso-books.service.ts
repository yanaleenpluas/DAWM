import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursoBooksService {

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get('https://harry-potter-api.onrender.com/libros')
  }
}
