import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-select-button',
  imports: [],
  templateUrl: './select-button.html',
  styleUrl: './select-button.scss'
})
export class SelectButton {
  readonly options = input.required<string[]>();
  readonly selected = model('');

  select(option: string): void {
    this.selected.set(option);
  }

}
