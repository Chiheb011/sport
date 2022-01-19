import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  statsTab: any[];
  constructor() { }

  ngOnInit() {
    this.statsTab = [
      { id: "1", title: 'Tun Vs Algr', scoreOne: "0", scoreTwo: '0', pt:"150" },
      { id: "2", title: 'Tun Vs Egy', scoreOne: "1", scoreTwo: '2', pt:"20" },
      { id : "3", title: 'Tun Vs Oman', scoreOne: "6", scoreTwo: '5', pt:"60" },
      { id : "4", title: 'Tun Vs Qatar', scoreOne: "3", scoreTwo: '1', pt:"50" },
      { id : "5", title: 'Oman Vs Qatar', scoreOne: "3", scoreTwo: '1', pt:"22" },
      { id : "6", title: 'Egy Vs Qatar', scoreOne: "3", scoreTwo: '1', pt:"200" },
      { id : "7", title: 'Algr Vs Qatar', scoreOne: "3", scoreTwo: '1' , pt:"200"},
      { id :"8", title: 'Frnc Vs Qatar', scoreOne: "3", scoreTwo: '1', pt:"30" },
      { id : "9", title: 'Russe Vs Qatar', scoreOne: "3", scoreTwo: '1', pt:"200" }

    ]
  }

}
