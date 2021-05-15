import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {
  termino = '';
  suscription: Subscription;
  listaImagenes :any [] = [];
  loading = false;
  totalImgPagina= 30;
  paginaActual=1;
  calcularTotalPaginas=0;
  constructor(private _imagenService:ImagenService) {
    this.suscription= this._imagenService.getTerminoBusqueda().subscribe(data =>{
      this.termino = data;
      this.loading =true;
      this.obtenetImg();
    })
  }

  ngOnInit(): void {
  }
  obtenetImg(){
    this._imagenService.getImagenes(this.termino).subscribe(data =>{
      this.loading=false;
      this.paginaActual =1;
      if(data.hits.length===0){
        this._imagenService.setError('No encontramos ningun resultado... ¡Vuelva a intentarlo!')
        return;
      }
      this.calcularTotalPaginas = Math.ceil(data.totalHits/this.totalImgPagina);
      this.listaImagenes =data.hits;
    }, error=>{
      this._imagenService.setError('Opss.. Ocurrio un error')
      this.loading = false;
    })
  }
  paginaAnterior(){
    this.paginaActual--;
  }
  paginaSiguiente(){
    this.paginaActual++;
  }
  paginaAnteriorClass(){
    if(this.paginaActual===1){
      return false;
    }else{
      return true;
    }
  }
  paginaSiguienteClass(){
    if(this.paginaActual===this.calcularTotalPaginas){
      return false;
    }else{
      return true;
    }
  }
}
