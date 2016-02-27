import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import { NgFor } from "angular2/common";


@Component({
    selector : 'hello-world',
    template : `
    
    <div>
    <h3 [ngStyle]="{color: colorInput.value} " >
        
        Asslam-0-Alikum
  
    </h3>
    
    <h3 [style.font-size.px]="fontSize.value" >
        
        how r u??
  
    </h3>
    </div>
    
    
    <div>
        <input type="text" name= "color" value="{{color}}" #colorInput>
        
        <input type="number" name= "fontSize" value="{{fontSize}}" #fontSize>
        <button (click)="apply(color,fontSize)" >Change</button>
    </div>
    
    <!--<div>
   <h2   [ngStyle]="{color: color}" [style.font-size.px]="size">
     Hello</h2>
    
        <input type="number" [(ngModel)]="size">  
        <input type="text" [(ngModel)]="color">  
        
        
        <button (click)= 'size = size + 1'> + </button>
        <button (click)= 'size = size - 1'> - </button>
        
    </div>-->
    
    <!--
    <h2> Enter your Choice: <span *ngIf="choice < 5"> {{choice}}  </span></h2>
    
    <input style="margin : 200px" type="number" [(ngModel)]="choice">
    <div>
    <ul [ngSwitch] ="choice">
        <li *ngSwitchWhen="1">First Choice</li>
        <li *ngSwitchWhen="2">Second Choice</li>
        <li [style.visibility]="'hidden'" *ngSwitchWhen="3">Third Choice</li>
        <li [style.font-size]="'23px'" *ngSwitchWhen="4">Fourth Choice</li>
        <li *ngSwitchWhen="5">Fifth Choice</li>
        <li  *ngIf="choice > 5" >Invalid Choice, please choose your choice only 1 t0 5</li>
        
      
        
    </ul>
    </div>
    -->
    `
    
})
 class AppComponent{
    color : string;
    fontSize:number;
 
 
   constructor(){}
   
   apply(color:string, fontSize:number){
   this.color = color
   this.fontSize = fontSize;
   }
 }
 bootstrap(AppComponent);