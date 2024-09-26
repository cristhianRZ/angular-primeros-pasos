import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    HeroComponent
  ],
  exports:[
    HeroComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HeroModele{

}
