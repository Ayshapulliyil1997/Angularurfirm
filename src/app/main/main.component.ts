import { Component, AfterViewInit } from "@angular/core";
import { interval } from "rxjs";
declare var anime : any;
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
    /*animations: [
      trigger('openClose', [
        // ...
        state('open', style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })),
        state('closed', style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue'
        })),
        transition('open => closed', [
          animate('1s')
        ]),
        transition('closed => open', [
          animate('0.5s')
        ]),
      ]),
    ],*/
    
  })
  export class MainComponent implements AfterViewInit  {
   
    ngAfterViewInit(): void {
        



        /*var anDef : any = {opacityIn: [],scaleIn: [],scaleOut: 0,durationIn: 0,durationOut: 0,delay: 0};
        anDef.opacityIn = [0,1];
        anDef.scaleIn = [0.2, 1];
        anDef.scaleOut = 3;
        anDef.durationIn = 800;
        anDef.durationOut = 600;
        anDef.delay = 500;
        
        anime.timeline({loop: true})
          .add({
            targets: '.anDef .letters-1',
            opacity: anDef.opacityIn,
            scale: anDef.scaleIn,
            duration: anDef.durationIn
          }).add({
            targets: '.anDef .letters-1',
            opacity: 0,
            scale: anDef.scaleOut,
            duration: anDef.durationOut,
            easing: "easeInExpo",
            delay: anDef.delay
          }).add({
            targets: '.anDef .letters-2',
            opacity: anDef.opacityIn,
            scale: anDef.scaleIn,
            duration: anDef.durationIn
          }).add({
            targets: '.anDef .letters-2',
            opacity: 0,
            scale: anDef.scaleOut,
            duration: anDef.durationOut,
            easing: "easeInExpo",
            delay: anDef.delay
          }).add({
            targets: '.anDef .letters-3',
            opacity: anDef.opacityIn,
            scale: anDef.scaleIn,
            duration: anDef.durationIn
          }).add({
            targets: '.anDef .letters-3',
            opacity: 0,
            scale: anDef.scaleOut,
            duration: anDef.durationOut,
            easing: "easeInExpo",
            delay: anDef.delay
          }).add({
            targets: '.anDef',
            opacity: 0,
            duration: 500,
            delay: 500
          });
        */
        
    }
  
  }