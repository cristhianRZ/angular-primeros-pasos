
import {Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl:'./list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public CharacterList: Character[] = [{
    name:'Despacho',
    power:10
  }]

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string):void {
    //TODO: Emitir el Id del personaje
    if (!id) return;

    console.log( id )

    this.onDelete.emit( id );
  }
 }
