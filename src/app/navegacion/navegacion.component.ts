import { Component, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDrawerContent, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {
   open = false;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    selectionado?: MatSidenavContent;
    @ViewChild("mainNav")
    set pane(v:  MatDrawerContent) {
        this.selectionado=v;
    }

  constructor(private breakpointObserver: BreakpointObserver) {}


  myMethod(){
    if (this.selectionado){
      console.log(this.selectionado
        )
    }


  }


}
