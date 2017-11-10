import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
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

  newBoardForm = this.fb.group({
    'name': ['', Validators.compose([Validators.required, Validators.minLength(2)])]
  })

  constructor(public navCtrl: NavController, public fb: FormBuilder) {

  }


  createNewBoard(event) {
    if(this.newBoardForm.valid) {
      console.log(this.newBoardForm.value)
      console.log("create board")
    }
    else {
      console.log("you suck")
    }
  }
}


