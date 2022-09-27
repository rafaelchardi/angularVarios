import { Directive, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { Subscription } from 'rxjs';


@Directive({
  selector: '[appControlerror]',
})
export class ControlerrorDirective implements AfterViewInit,OnDestroy {

  controldecambios!:Subscription;
  ///-----------------------------------------------------------------------------------------------------------------------------------------------
  constructor(private host: MatFormField,
             /* private el:ElementRef, private renderer:Renderer2 */) {
        /*       console.log(el);
              console.log(renderer);
 */
  }
///-----------------------------------------------------------------------------------------------------------------------------------------------
  ngOnDestroy(): void {
    if(this.controldecambios) {
      this.controldecambios.unsubscribe();
    }

  }
  ///-----------------------------------------------------------------------------------------------------------------------------------------------
  ngAfterViewInit(): void {
    if (!this.host)           { console.log('control de errores , no se encuentra el host') ;    return;    }
    if (!this.host._control)   { console.log('control de errores , no se encuentra el host._control') ;    return;    }
    if (!this.host._control.ngControl)  { console.log('control de errores , no se encuentra el host._control.ngControl') ;    return;    }

    this.controldecambios=this.host._control.ngControl.valueChanges!.subscribe(x=>{
       const label = this.host._elementRef.nativeElement.querySelectorAll('label[idslabel="true"]');
       if (label.length>0) {
        this.host._elementRef.nativeElement.removeChild(label[0]);
       }
       if (this.host._control.ngControl!.errors) {
        this.host._elementRef
        const label = document.createElement("label");
        label.style.color = "red";
        label.style.display="flex";
        label.style.fontSize= "10px";
        label.style.marginTop= "-10px";
        label.setAttribute("idslabel", "true");
        label.style.animation="paraelcontrolerror 0.5s"

        if (this.host._control.ngControl!.errors["required"]) {   label.innerHTML = 'Este campo es obligatorio';  }
        if (this.host._control.ngControl!.errors["min"]) {   label.innerHTML = `Valor demasiado pequeño. Mínimo: ${this.host._control.ngControl!.errors["min"]}`;  }
        if (this.host._control.ngControl!.errors["max"]) {   label.innerHTML = `Valor demasiado grande. Máximo: ${this.host._control.ngControl!.errors["max"]}`;  }
        if (this.host._control.ngControl!.errors["requiredTrue"]) {   label.innerHTML = 'Este campo es obligatorio';  }
        if (this.host._control.ngControl!.errors["email"]) {   label.innerHTML = 'Email inválido';  }
        if (this.host._control.ngControl!.errors["minlength"]) {   label.innerHTML = `Valor demasiado corto ${this.host._control.ngControl!.errors["maxlength"].actualLength} de ${this.host._control.ngControl!.errors["maxlength"].requiredLength}`;  }
        if (this.host._control.ngControl!.errors["maxlength"]) {   label.innerHTML = `Valor demasiado largo ${this.host._control.ngControl!.errors["maxlength"].actualLength} de ${this.host._control.ngControl!.errors["maxlength"].requiredLength}`;  }

        if (this.host._control.ngControl!.errors["pattern"]) {   label.innerHTML = 'Valor inválido, revisa el formato';  }
        this.host._elementRef.nativeElement.appendChild(label);
       }

    });
  }

}
