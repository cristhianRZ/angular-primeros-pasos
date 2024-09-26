import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public prodNames: string[] = ['Limon', 'Amarillo', 'Coco', 'Mango', 'Canela'];

  public deleteProd?: string;

  removeLasProd():void{
    this.deleteProd = this.prodNames.pop();
  }




}
