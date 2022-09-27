import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestasRoutingModule } from './encuestas-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { ScriptLoadService } from './servicios/script-load.service';
import { StringtonumberPipe } from './pipes/stringtonumber.pipe';
import {MatListModule} from '@angular/material/list';
import { ControlerrorDirective } from './directivas/controlerror.directive';
import { VisorComponent } from './visor/visor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FichaEncuestaComponent } from './ficha-encuesta/ficha-encuesta.component';
import { TranslateModule } from '@ngx-translate/core';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { NotifierModule } from 'angular-notifier';
import { ResultadosComponent } from './resultados/resultados.component';
import { BrowserModule } from '@angular/platform-browser';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
     StringtonumberPipe,
     ControlerrorDirective,
     VisorComponent,
     FichaEncuestaComponent,
     EncuestasComponent,
     ResultadosComponent,

  ],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatListModule,
   TranslateModule,
    NotifierModule
  ],
  providers: [ScriptLoadService]
})
export class EncuestasModule { }


