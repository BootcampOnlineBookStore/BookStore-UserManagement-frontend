import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { Userform } from '../userform';
import { UserserviceService } from '../userservice.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  userform:Userform=new Userform();
  msg:String;
  errorMsg:string;
  user:User[]=[];
  @ViewChild("frm")
  form:NgForm;
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  createUser(){ 
    this.userService.createUser(this.userform).subscribe(data=>{
      this.msg=data.message;
      this.errorMsg=undefined;
      this.form.reset();
    },error=>{
      this.errorMsg=(error.error).message;
      this.msg=undefined;
      console.log(this.errorMsg);
    });
  }

}
