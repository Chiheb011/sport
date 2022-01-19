import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  bannerDetails:any;
  players:any=[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.bannerDetails={title : "All Players"}
    this.playerService.sendReqToGetAllPlayers().subscribe((data) => {
      this.players = data.result
    })
  }


}
