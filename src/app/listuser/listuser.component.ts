import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  user:User[]=[];
  msg:string;
  fullName=this.userService.fullName;
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.userService.listAllUsers().subscribe(data=>{this.user=data,this.msg=undefined},
      error=>this.msg=error.error.message);
  }
  deleteUser(email:string){
    this.userService.deleteUser(email).subscribe(data=>{this.msg=data.message + "for ID" + email; 
    this.userService.listAllUsers().subscribe(data=>this.user=data);});
  }
  
 
}
