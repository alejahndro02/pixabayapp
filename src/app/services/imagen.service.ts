import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
private error$= new Subject<string>();
private terminoBusqueda$ = new Subject<string>()
  constructor(private http: HttpClient) { }
  setError(mensaje: string){
    this.error$.next(mensaje)
  }
  getError():Observable<string>{
    return this.error$.asObservable()
  }
  enviarTerminoBusqueda(termino :string){
    this.terminoBusqueda$.next(termino)
  }
  getTerminoBusqueda():Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }
  getImagenes(termino: string, totalImgPagina:number,paginaActual:number): Observable<any>{
    const PIXABAYKEAPI='10058662-9c6798d02f5ca0bafd552ba6c';
    const URL ='https://pixabay.com/api/?key='+PIXABAYKEAPI+'&q='+termino+'&per_page='+totalImgPagina+'&page='+paginaActual;
    return this.http.get(URL);
  }

}
