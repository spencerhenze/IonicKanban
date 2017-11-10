import { Board } from './../../models/board';
import { Component } from '@angular/core';

/**
 * Generated class for the BoardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'board',
  templateUrl: 'board.html'
})
export class BoardComponent {

  board: Board;

  constructor() {
  }

}
