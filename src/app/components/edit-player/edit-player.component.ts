import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id:any;
  Player:any={};
  EditPlayerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private playerService:PlayerService,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.sendReqToGetPlayerById(this.id).subscribe(

      (data) => {
        this.Player = data.result;
      }
    );
    this.EditPlayerForm= this.formBuilder.group({
      name:[''],
      nbr:[''],
      post:[''],
      age:[''],
      avatar:['']
     
    })
  }
  EditPlayer(){
    console.log("Player", this.Player);
    this.playerService.sendReqToEditPlayer(this.Player).subscribe(
      (data) =>{
        console.log('Message From BackEnd' , data.message);
        this.router.navigate(['admin'])
        
      }
    );
    
  }
}
