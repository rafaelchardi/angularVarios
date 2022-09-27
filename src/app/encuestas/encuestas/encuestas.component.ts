import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FichaEncuestaComponent } from '../ficha-encuesta/ficha-encuesta.component';
import { ScriptLoadService } from '../servicios/script-load.service';
import { EncuestaExt } from '../interfaces/encuesta';
import { concatMap, filter } from 'rxjs/operators';
import { from, Observer, of } from 'rxjs';
import { formatDateMysql } from '../utils/funciones';
import { ResultadosComponent } from '../resultados/resultados.component';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';



@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss'],
  providers: [ScriptLoadService],

})
export class EncuestasComponent implements OnInit  {



  encuestasData : EncuestaExt[]=[];
  encuestasSeleccionada: EncuestaExt = {};
  page = 1;
  pageSize = 15;
  collectionSize = 5;
  primerClick  = true;
  esperaresultado = false;

  constructor(private translate: TranslateService,
              public dialog: MatDialog,
              private scriptService: ScriptLoadService,
              private route: ActivatedRoute,
              private notifier:NotifierService ) {
   }
//---------------------------------------------------------------------
  ngOnInit(): void {
        this.encuestasData=this.route.snapshot.data["datos"];
        this.collectionSize=this.route.snapshot.data["datos"].length;
        this.scriptService.cargaParaFormio();
 }

 paginaseleccionada(page:any){
  this.encuestasSeleccionada = {};
 }
 //-----------------------------------------------------------------------------
 getDescripcionTipoencuesta(item:any){
  switch (Number(item.tipo)) {
   case 1:
      return 'Propietario - Comunidad';
   case 2:
     return 'Empleado - Comunidad';
   case 3:
     return 'Propietario';
   case 4:
     return 'Empleado';
   case 5:
     return 'Proveedor';
    case 6:
     return 'General';
   default:
     break;
  }
 return '....';
}
 //-----------------------------------------------------------------------------
dblclickLista(co:any){
  setTimeout(()=>{
      if(this.primerClick){
        this.primerClick = false;
            setTimeout(() => {
              this.primerClick = true;
            }, 250);
      } else {
        this.primerClick = true;
        this.openDialog(co)
      }
   },250)
}
//-----------------------------------------------------------------------------
openDialog(item:any) {
 console.log(item);
  const dialogConfig = new MatDialogConfig  ();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '900px';
  dialogConfig.data = item;

  const resupesta: Observer<any> = {
      next : respuesta => {
        if (respuesta.cod === 0) {

           const found =this.encuestasData.findIndex(x=>{return Number(x.id) === Number(respuesta.datosAux.id) });
           if (found>-1) {
              this.encuestasData.splice(found, 1,respuesta.datosAux);

           } else {
              this.encuestasData=([...this.encuestasData.concat(respuesta.datosAux)]);
           }
           this.encuestasSeleccionada = respuesta.datosAux;
           this.notifier.notify("warning","Datos actualizados");
        } else {
          this.notifier.notify("warning",respuesta.msj);

        }
      },
      error: error => {
        this.notifier.notify("warning",error);
      },
      complete: () => {
      }};


  const dialogRef = this.dialog.open(FichaEncuestaComponent,dialogConfig);
  dialogRef.afterClosed().pipe(
    filter(result=>result),
    concatMap((result :any, index:number) => {
                let accion = 'A';
                if (result.id ) {
                  accion = 'M';
                } else {
                  result.fecha = formatDateMysql(new Date());
                };
                /* return from(this.notificacionesctr.procesaEventoEncuesta(result,accion)); */
                return of([1]);
      })).subscribe(resupesta);
}
verResultados(item:any){
  const dialogConfig = new MatDialogConfig  ();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '900px';
  //dialogConfig.height= '500px',
  dialogConfig.data = item;
  /* dialogConfig.hasBackdrop = false */
  const dialogRef = this.dialog.open(ResultadosComponent,dialogConfig);
  dialogRef.afterClosed().subscribe();
}


//-----------------------------------------------------------------------------
BorrarElemento(co:any ){
 if (!co) {
  return;
 }
  this.esperaresultado = true;
 }
}



//---------------------------------------------------------------------
/* ngOnDestroy(): void {

  document.getElementById('main-wrapper').removeEventListener('click', this.onClick.bind(this));
} */
 //---------------------------------------------------------------------
/*  ngAfterViewInit() {
    document.getElementById('main-wrapper').addEventListener('click', this.onClick.bind(this));
    console.log(document.getElementById('tablaEncuestas'));
} */
/*  onClick(that){
  console.log(that);
 if (that.path[0].nodeName !== "TD") {
  this.encuestasSeleccionada=undefined;
  return;

 }
 let found =false;
 that.path.forEach((ele)=>{
   if (ele.id === 'tablaEncuestas') {
    found = true;
   }
 })
 if (found === false) {
  this.encuestasSeleccionada=undefined;
 }

} */
