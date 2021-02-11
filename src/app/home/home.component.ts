import { Component, OnInit } from '@angular/core';
import {GitserviceService} from '../services/gitservice.service';
import {Github} from '../github'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
githubs:Github[];

  constructor(public Gitservice: GitserviceService) { }

  ngOnInit() {
    this.searchGit("bernice");
  }
  searchGit(searchTerm){
    this.Gitservice.searchGithub(searchTerm).then(
      ()=>{
        this.githubs=this.Gitservice.githubs;
        console.log(this.githubs);

      },
      (error)=>{
        console.log(error)
      }
    )
    // console.log(searchTerm)
  }

}
