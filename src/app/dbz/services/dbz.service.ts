import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

import { DbzModule } from '../dbz.module';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] =[{
    id:uuid(),
    name: 'Recepcion',
    power: 1000
  },{
    id:uuid(),
    name:'Clasificado',
    power: 9500
  },{
    id:uuid(),
    name:'Curado',
    power: 2000
  }];

  addCharacter(character:Character):void {

    const newCharacter: Character = { id: uuid(), ...character };


    this.characters.push(newCharacter);
  }

  deleteCharacterById (id:string){
    this.characters = this.characters.filter( character => character.id !== id);
  }
}
