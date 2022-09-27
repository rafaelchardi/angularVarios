import { Directive, HostListener, ElementRef, Input, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Directive({
  selector: '[appEmailClick]',
})
export class EmailClickDirective {

  actua  = true;

  @Input() set appEmailClick(value: any) {


   this.actua  = value;
    if (!value) {
      this.actua  = true;
    };
  }

  constructor(private translateService: TranslateService,
     private elementRef: ElementRef,
     /* private renderer: Renderer2, */
     ) {
       this.elementRef.nativeElement.style.color = 'blue';

     }
  @HostListener('click') onClick() {
    this.onClick1();

 }
  async onClick1(){
     if (this.actua === false) {
      return;
    };
    const buttons1 = [];



  }


}
