import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appLoading]'

})
export class LoadingDirective {

  @HostBinding('hidden') isHidden = false;

  //element: ElementRef;
  //renderer: Renderer2;
  //child: any;


  @Input() set appLoading(value: any) {

    //if (this.child && this.element.nativeElement) {
    //  this.renderer.removeChild(this.element.nativeElement, this.child);
   // }
   this.isHidden  = true;
    if (!value) {
      this.isHidden  = false;
      //this.child = this.renderer.createElement('Hello World!');
      // this.renderer.appendChild(this.element.nativeElement, this.child );
    };
  }

  /* get appLoading(): any {
          return this.appLoading1;
  }
 */
   constructor(/* elementaux: ElementRef,
               rendereraux: Renderer2 */) {

     //this.renderer=rendereraux;
     //this.element=elementaux;
  }

 /*  @HostListener('mouseover') onMouseOver() {

  }

  @HostListener('mouseout') onMouseOut() {

  }

  @HostListener('keydown', ['$event'])onInput(e: any) {

  } */



}

