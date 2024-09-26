import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Couter : {{ couter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetby()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent  {
  public title:string = 'Hola Mundo';
  public couter:number = 10;


  increaseBy(value : number ):void{
    this.couter += value;
  }

  resetby():void{
    this.couter = 10;

}}
