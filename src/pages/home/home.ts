import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  creatingBoard = false;
  newBoard = {
    name: ''
  };
  
  constructor(public navCtrl: NavController) {

  }

  createNewBoard() {
    console.log("create board")
  }
}
