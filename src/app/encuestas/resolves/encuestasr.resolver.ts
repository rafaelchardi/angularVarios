import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { pluck, catchError, map } from 'rxjs/operators';
import { EncuestaExt } from '../interfaces/encuesta';

@Injectable({
  providedIn: "any",
})
export class EncuestasrResolver implements Resolve<EncuestaExt[]> {
  constructor(

    ) {
   }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EncuestaExt[]> {
    return  of([
      {
        id: '1',
        id_administrador: 'asdf',
        id_comunidad: 'asdf',
        idAplicacion: 'asdf',
        descripcion: 'asdf',
        estado: 'asdf',
        tipo: 'asdf',
        formulario_json: 'asdf',
        fecha: 'asdf',
        tipo_respuesta: 'asdf',
        emil_respuesta: 'asdf',
        endpoint_respuesta: 'asdf',
        id_programa: 'asdf',
      }
    ]);


   /*   return from(this.postApiService.post(this.getUrl(),this.getBody()))
       .pipe(
        catchError(err => {
           return of(err);
        }),
        pluck('datos'),
        map(x=>{
          const xaux = x.map((x1:any)=>{return {...x1,verEncuestas:false}} );
          return xaux;
        })); */
  }
  getUrl(){
    return 'tablas';
  };
  getBody(){
    const where  = [ {campo:'idAplicacion',tipo:'n',condicion:'=',valor:''},
                     {campo:'id_administrador',tipo:'n',condicion:'=',valor:''}];

    let body: any = {
       accion : 'get',
       distinctSelect:'',
       id_administrador :1,
       idAplicacion : 1,
       tabla:'encuestas' ,
       tablaalias:'e',
        select:['*'],
       where,
       join : [  {
        tabla : 'comunidad',
        tablaalias :'co',
        tipoJoin : 'LEFT JOIN',
        campos   : [{campo:'nombre_com',alias:'nombre_comco'}],
        on:[{campo1:'idAplicacion',condicion:'=',campo2:'idAplicacion'},
            {campo1:'id_administrador',condicion:'=',campo2:'Id_administrador'},
            {campo1:'id_comunidad',condicion:'=',campo2:'id_comunidad'}
            ],
          },
        {
            tabla : 'administrador',
            tablaalias :'ad',
            tipoJoin : 'INNER JOIN',
            campos   : [{campo:'nombre',alias:'nombread'}],
            on:[{campo1:'idAplicacion',condicion:'=',campo2:'idAplicacion'},
                {campo1:'id_administrador',condicion:'=',campo2:'ID'},
                ],
           }
       ],
       order:[{campo:'fecha',sentido:'DESC'}],
             };


   body.join.push({
            tabla : 'respencuestas',
            tablaalias :'re',
            tipoJoin : 'LEFT JOIN',
            agregados   : {operacion:'count',alias:'totalencuestas'},
            on:[{campo1:'idAplicacion',condicion:'=',campo2:'idAplicacion'},
                {campo1:'id_administrador',condicion:'=',campo2:'id_administrador'},
                {campo1:'id',condicion:'=',campo2:'id_encuesta'}],
            });


    return body;
 }
}
