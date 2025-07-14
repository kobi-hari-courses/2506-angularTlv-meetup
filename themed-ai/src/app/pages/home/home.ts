import { Component } from '@angular/core';

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: true,
})
export class HomeComponent {
bars = [
  this.getBarItem(0, 413, 'Support'),
  this.getBarItem(1, 240, 'Sales'),
  this.getBarItem(2, 520, 'General'),
  this.getBarItem(3, 165, 'Tech')
];

getBarItem(index: number, value: number, label: string) {
  const height = value * 0.13;  

  return {
    x: index * 70 + 20, // Adjust x position based on index
    y: -height + 90, // Adjust y position based on height
    width: 50, 
    height: height, 
    fill: `var(--p-0${index + 3})`, // Use a dynamic fill color
    value: value, 
    label: label
  };
}


}
