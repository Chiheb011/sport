import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {
  srchmatch:any[];
  constructor() { }

  ngOnInit() {
    this.srchmatch = [
      { id: 1, teamOne: 'ca ', teamTwo: 'est', scoreOne: "1", scoreTwo: '0', date: "1998-12-5", percent: "0.75" },
      { id: 2, teamOne: 'ca  ', teamTwo: 'ess', scoreOne: "2", scoreTwo: '3', date: "2000-01-11", percent: "0.25" },
      
    ]

  }

}
