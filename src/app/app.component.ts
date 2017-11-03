import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import * as $ from 'jquery' ;
// https://stackoverflow.com/a/43376844
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'app';

    public ngOnInit(): void {
/*
      $(document).ready(function(){
        $('.carousel').carousel();
      });
*/
    }
}
