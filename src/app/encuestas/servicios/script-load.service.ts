import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';


const SCRIPT_FORMIO =  'https://cdn.form.io/formiojs/formio.full.min.js';
const CSS_BOOTSTRAP = ' https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
const CSS_FORMIOFULL = 'https://cdn.form.io/formiojs/formio.full.min.css';

declare let Formio: any;
@Injectable({
  providedIn: "any",
})

export class ScriptLoadService{
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document:any){
    this.renderer = rendererFactory.createRenderer(null, null);
  }

   async cargaFormulario(id:any,components:any,opciones={}){
    return new Promise((resolve1, reject) => {
            this.cargaParaFormio().then(()=>{

                  Formio.createForm(document.getElementById(id), {
                        components
                        },opciones).then((form:any)=>{
                                resolve1(form);
                                });

            });
    });
   }

   async cargaDiseño(id:any,opciones={},components={}){
    return new Promise((resolve1, reject) => {
           this.cargaParaFormio().then(()=>{

                  Formio.builder(document.getElementById(id),{components},opciones
                            ).then((builder:any)=>{
                                resolve1(builder);
                                });
                                ;
                                // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                               /*  Formio.Components.components.textfield.editForm = function() {
                                  return {
                                    components: [
                                      {
                                        type: 'textfield',
                                        key: 'label',
                                        label: 'Label'
                                      },
                                      {
                                        type: 'checkbox',
                                        key: 'validate.required',
                                        label: 'Required'
                                      },

                                    ]
                                  };
                                }; */

            });

    });
   }

   cargaParaFormio(){

    return new Promise((resolve2, reject) => {

       let entra = false;



        if (!document.querySelector('[src="https://cdn.form.io/formiojs/formio.full.min.js"]')) {
                entra = true;

                const cc1 = this.loadCsst(CSS_FORMIOFULL);
                cc1.onload = () => {

                 };
                 cc1.onerror = () => {
                   reject();
                 };

              /*    const cc3 = this.loadCsst(CSS_FORMIOFONT);
                 cc3.onload = () => {

                  };
                  cc3.onerror = () => {
                    reject();
                  };
 */

               /*   const cc2 = this.loadCsst(CSS_BOOTSTRAP);
                 cc2.onload = () => {


                 };
                 cc2.onerror = () => {
                   reject();
                 }; */

                const scriptElement1 = this.loadJsScript(SCRIPT_FORMIO);
                scriptElement1.onload = () => {

                  resolve2(true);
                };
                scriptElement1.onerror = () => {
                  console.log('no puedo cargar the SCRIPT_FORMIO!');
                  reject();
                };
        }

        if  (entra === false) {
          resolve2(true);
        }

    });


    /* const scriptElement = this.loadJsScript(renderer, SCRIPT_PATH);
    scriptElement.onload = () => {
      console.log('el SCRIPT_PATH');

      // const formsids = this.renderer.createElement('forms-ids');
//       const formulario = document.getElementById('formulario');
      // this.renderer.appendChild(formulario, formsids);

    };
    scriptElement.onerror = () => {
      console.log('Could not load SCRIPT_PATH');
    };*/


   }


   loadJsScript(src: string) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(this.document.body, script);
    return script;
  }


  loadCsst( href: string): HTMLScriptElement {
    const script = this.renderer.createElement('link');
    script.rel = 'stylesheet';
    script.href = href;
    this.renderer.appendChild(this.document.head, script);
    return script;
  }


}


export const pintaEncuesta = () => <T>(source: Observable<T>) =>
  new Observable<T>((observer) => {

    return source.subscribe({
      next(x:any) {
          observer.next(x);
          const json = JSON.parse(x.formulario_json);
          const opciones = {
            readOnly: true,
            viewAsHtml: true
            };
            setTimeout(() => {
               FormiocreateForm('formio'+x.id,json,opciones).then((form: any)=>{

                    const data = JSON.parse(x.resuestas_json);;
                    form.submission = {
                      data
                    };
                      }).then(()=>{
                        const  ele2 = document.querySelectorAll('button[type="submit"]');
                        ele2.forEach((ppe: any )=>{
                          ppe.style='visibility: hidden;';
                        });

                      });

                    }, 100);

      },
      error(err) {
        observer.error(err);
      },
      complete() {
        observer.complete();
      },
    });
  });



export const FormiocreateForm = (id:any,components:any,opciones:any): Promise<any> => {
  return new Promise((resolve1, reject) => {
        Formio.createForm(document.getElementById(id), {
        components
        },opciones).then((form:any)=>{
                resolve1(form);
                });
             });
};
