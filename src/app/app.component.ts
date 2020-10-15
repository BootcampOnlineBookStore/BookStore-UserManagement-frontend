import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageserviceService } from './storageservice.service';
import { Userform } from './userform';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BookStoreUserManagement';
  
  msg:string;
  errorMsg:string;
  loginflag:boolean=false;
  login:Userform = new Userform();
  email:string;
  fullName:string;
  role:string;
  password:string;
  bookimage:string="assets/image/mybookstore.jpg";
  constructor(private userService:UserserviceService, private router:Router,private storageService:StorageserviceService) {
    if(localStorage.getItem("tokenId") !=null){
      let userstr = localStorage.getItem("tokenId");
      console.log(userstr.split("-")[2]);
      this.fullName=this.userService.decrypt(userstr.split("-")[0]);
      this.loginflag=true;
      this.password=this.userService.decrypt(userstr.split("-")[1]);
      this.loginflag=true;
      this.email=this.userService.decrypt(userstr.split("-")[2]);
      this.loginflag=true;
      this.role=this.userService.decrypt(userstr.split("-")[3]);
    }

   }
   ngOnInit(): void {
    this.storageService.watchStorage().subscribe(data=>{
      console.log(data);
      if(data == "set"){
        let userstr = localStorage.getItem("tokenId");
        console.log(userstr.split("-")[2]);
        this.fullName=this.userService.decrypt(userstr.split("-")[0]);
        this.loginflag=true;
        this.password=this.userService.decrypt(userstr.split("-")[1]);
        this.loginflag=true;
        this.email=this.userService.decrypt(userstr.split("-")[2]);
        this.loginflag=true;
        this.role=this.userService.decrypt(userstr.split("-")[3]);
      }
      else
      this.loginflag=false;
    });
}
logout(): void {
  this.userService.doLogout().subscribe(data=>{console.log(data);
   this.storageService.removeItem("tokenId");
   console.log("You have logged out");
   this.loginflag=false;
 });
}


   
}
