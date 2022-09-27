import { AfterViewInit, Component, Inject, OnInit, Pipe } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EncuestaExt } from '../interfaces/encuesta';
import { ScriptLoadService } from '../servicios/script-load.service';
import { Comunidad } from '../interfaces/comunidad';

@Component({
  selector: 'app-ficha-encuesta',
  templateUrl: './ficha-encuesta.component.html',
  styleUrls: ['./ficha-encuesta.component.scss'],
  providers: [ScriptLoadService],
})
export class FichaEncuestaComponent implements OnInit,AfterViewInit {
  formulario!:FormGroup;
  comunidades!:Comunidad[];
  esperaresultado = false;


    constructor(@Inject(MAT_DIALOG_DATA) public item: EncuestaExt,

              private scriptService: ScriptLoadService,
              public dialogRef: MatDialogRef<FichaEncuestaComponent>,) {
  }
 ///-------------------------------------------------------------------------
  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(),
      id_administrador: new FormControl('',[Validators.required,Validators.min(1)]),
      fecha: new FormControl(),
      idAplicacion: new FormControl('' ,[Validators.required,Validators.min(1)]),
      descripcion: new FormControl('' , [Validators.required,Validators.maxLength(25), ]),
      estado: new FormControl('0', [ Validators.required]), //'0-no activa 1-activa',
      estadoaux: new FormControl(true, [ Validators.required]), //'0-no activa 1-activa',
      tipo: new FormControl('6',[Validators.required]), //'1-propi-comu 2-emple-comu 3-propietario 4-empleado 5-proveedor 6-general',
      id_programa: new FormControl(),
      id_comunidad: new FormControl( ),
      tipo_respuesta: new FormControl('0',[Validators.required]), //'0-ninguna 1-email 2-endpoind',
      formulario_json: new FormControl('', [ Validators.required ]),
      emil_respuesta: new FormControl( ''),
      endpoint_respuesta: new FormControl(''),
      nombre_comco :new FormControl( ),
    });
    if (this.item) {
       this.formulario.patchValue(this.item);
    }

    /* let self = this;
    let originalMethod = this.formulario.get('formulario_json').markAsTouched;
    this.formulario.get('formulario_json').markAsTouched = function () {
      originalMethod.apply(this, arguments);
      self.formulario.markAllAsTouched();
      } */
  }

  ngAfterViewInit(): void {



  }
  //------------------------------------------------------------------------
  getUrl(){
    return 'tablas';
  };
  //------------------------------------------------------------------------
  async post() {



 this.esperaresultado = false;

  }
 ///-------------------------------------------------------------------------
  getBody(){
     return '';
  };
//----------------------------------------------------------

 //--------------------------
compFicha_onSubmit(formulario:FormGroup){
    this.dialogRef.close(formulario.value);
}
//--------------------------
  CerrarEldialogo() {
    this.dialogRef.close();
}

}
