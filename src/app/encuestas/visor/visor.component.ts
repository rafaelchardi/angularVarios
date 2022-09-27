import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    console.log('params 1');
    console.log( this.route.snapshot.params);
    this.route.params
  .subscribe(
    (updatedParams) => {
      console.log('params 2');
      console.log(updatedParams)
    }
  );
  console.log('query 1');
  console.log(this.route.snapshot.queryParams);
  this.route.queryParamMap
  .subscribe((params : any) => {
    console.log('query 2');
    console.log(params.get('allowEdit'));
    console.log(params.allowEdit);
    }
   );
   }

  ngOnInit(): void {
  }

}
