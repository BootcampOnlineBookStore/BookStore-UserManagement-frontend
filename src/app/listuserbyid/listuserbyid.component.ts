import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-listuserbyid',
  templateUrl: './listuserbyid.component.html',
  styleUrls: ['./listuserbyid.component.css']
})
export class ListuserbyidComponent implements OnInit {


  email:string;
  user:User=null;
  msg:string;
  fullName=this.userService.fullName;
  constructor(private userService:UserserviceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit()  { 
    
  }
    searchById(){
      this.userService.viewUserById(this.email).subscribe(data=>{
        this.user=data,this.msg=undefined}, error=>{console.log(error); this.msg=error.error.message;this.user=null}
      ) 
  };
    
}
