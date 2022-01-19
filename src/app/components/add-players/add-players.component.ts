import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {

  Player:any={};
  addPlayerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addPlayerForm= this.formBuilder.group({
      name:[''],
      number:[''],
      post:[''],
      age:[''],
      avatar:['']
     
    })
  }
  addPlayer(){
    console.log("Player", this.Player);
    
  }
}
