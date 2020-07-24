import { Component, VERSION } from '@angular/core';
import Pokemon from './féchié.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  title = "Pokedex";
  list: {id: number, img: string, name: string, type: string} [] = Pokemon;
}