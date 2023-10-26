import { Component, OnInit } from '@angular/core';
import { HelperService } from './services/helper.service';
import { UserService } from './services/user.service';
import UserReadDto from './Types/Users/UserReadDto';
import { UserDetailsDTO } from './Types/Users/UserDetailsDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private helper: HelperService, private user: UserService)
  {}
  UserDetails?:UserDetailsDTO;
  Users?:UserReadDto[];
  ngOnInit(): void {
    this.helper.Store("Age",1235);
    /* this.user.getUsers().subscribe(
      {
        next:(Users:UserReadDto[])=>{
          this.Users=Users;
        },
        error:()=>{

        },
      }
    ) */
    this.user.getUser().subscribe(
      {
        next:(SiteUSER:UserDetailsDTO)=>{
          console.log(SiteUSER);
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }     
    );
  }

}
