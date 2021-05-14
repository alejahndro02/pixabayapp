import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {
nombreImg:string;
  constructor(private _imagenService: ImagenService) {
    this.nombreImg='';
   }

  ngOnInit(): void {
  }
  buscarImagenes(){
    if(this.nombreImg===''){
      this._imagenService.setError('Agrega una palabra para iniciar la busqueda');
    }
  }
}
