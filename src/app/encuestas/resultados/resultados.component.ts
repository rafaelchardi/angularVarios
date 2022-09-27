import { Component,  Inject, OnInit, AfterViewInit } from '@angular/core';
import { EncuestaExt } from '../interfaces/encuesta';
import { FichaEncuestaComponent } from '../ficha-encuesta/ficha-encuesta.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit,AfterViewInit
{

  ctx = {
        datos1:[]
  };
  constructor(@Inject(MAT_DIALOG_DATA) public item: EncuestaExt,
              public dialogRef: MatDialogRef<FichaEncuestaComponent>) { }
  async ngOnInit(){
  }
//------------------------------------------
  getUrl(){
    return 'tablas';
  };
  //------------------------------------------
 getBody(){
    const where  = [ {campo:'id_encuesta',tipo:'n',condicion:'=',valor:''+this.item.id}]; // activas


  const body: any = {
     accion : 'get',
     id_administrador :1,
     idAplicacion : 1,
     tabla:'respencuestas' ,
     select:['*'],
     where
           };

  return body;
 };
  //------------------------------------------
 ngAfterViewInit(): void {
  this.post();
}
//------------------------------------------------------------------------
  post() {
   /*  from(this.postApiService.post(this.getUrl(),this.getBody()))
   .pipe(
     map(x=>x.datos),
     tap(x=>this.ctx.datos1= x ),
     map(x=>from(x)),
     concatAll(),
     pintaEncuesta()).subscribe((x:any) =>{}); */
  }
 //------------------------------------------
 CerrarEldialogo() {
  this.dialogRef.close();
}

}
