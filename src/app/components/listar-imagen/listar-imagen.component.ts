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
  constructor(private _imagenService:ImagenService) { 
    this.suscription= this._imagenService.getTerminoBusqueda().subscribe(data =>{
      this.termino = data;
      this.obtenetImg();
      
    })
  }

  ngOnInit(): void {
  }
  obtenetImg(){
    this._imagenService.getImagenes(this.termino).subscribe(data =>{
      console.log(data);
      
    })
  }
}
