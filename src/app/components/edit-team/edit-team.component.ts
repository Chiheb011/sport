import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  id:any;
  Team:any={};
  EditTeamForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private teamService:TeamService,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.teamService.sendReqToGetTeamById(this.id).subscribe(

      (data) => {
        this.Team = data.result;
      }
    );
    this.EditTeamForm= this.formBuilder.group({
      TeamName:[''],
      Foundation:[''],
      Country:[''],
      logo:['']
     
    })
  }
  EditTeam(){
    console.log("Team", this.Team);
    this.teamService.sendReqToEditTeam(this.Team).subscribe(
      (data) =>{
        console.log('Message From BackEnd' , data.result);
        this.router.navigate(['admin'])
        
      }
    );
    
  }
}
