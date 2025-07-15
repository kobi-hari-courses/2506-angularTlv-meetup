import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  imports: [],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class PlaygroundComponent {
  readonly palettes = [
    {name: 'primary', code: 'p'}, 
    {name: 'accent', code: 'a'},
    {name: 'neutral', code: 'n'}
  ];

  readonly shades = [
    {entry: '00', contrast: '10'}, 
    {entry: '01', contrast: '10'},
    {entry: '02', contrast: '10'},
    {entry: '03', contrast: '10'},
    {entry: '04', contrast: '10'},
    {entry: '05', contrast: '10'},
    {entry: '06', contrast: '00'},
    {entry: '07', contrast: '00'},
    {entry: '08', contrast: '00'},
    {entry: '09', contrast: '00'},
    {entry: '10', contrast: '00'},
  ];

}
