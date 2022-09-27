import { Directive, Input, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: '[appOpencloseSliding]'
})
export class OpencloseSlidingDirective implements OnInit {


  @Input() appOpencloseSliding = 0;

  constructor(protected host: ElementRef) {
  }

  ngOnInit(): void {

 }

}
