import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Userform } from '../userform';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
userform:Userform;
msg:string;
errorMsg:string;
user:User = new User();
user1:User = new User();
check:boolean=false;
allusers:any;
click:boolean=false;
fullName=this.userService.fullName;
@ViewChild("frm")
form:NgForm;
constructor(private userService:UserserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   
//this.route.paramMap.subscribe(params=>{let emailId:string=(params.get("id"));
  //this.userService.viewUserById(emailId).subscribe(data=>this.user=data);
//});
this.userService.listAllUsers().subscribe((data)=>this.allusers=data);

  }
  updateUser(userData:User){
    this.user1=userData;
    this.click=true;
  }
  updateDetails(){
    this.userService.editUser(this.user1).subscribe((data)=>this.msg=data.message);
    this.check=true;
    
  }  
  }

