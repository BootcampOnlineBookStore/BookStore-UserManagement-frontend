import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageserviceService } from '../storageservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  email:string;
  password:string;
  msg:string;
  myimage:string="assets/image/admin.jpg";
  giantimage:string="assets/image/mainbook.jpg"
  constructor(private router:Router, private storageservice:StorageserviceService, private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  doLogin(){
    this.userService.doLogin(this.email , this.password).subscribe(data=>{
      this.storageservice.setItem("tokenId", data);
      this.msg=undefined;
      this.router.navigateByUrl("/");
    },error=>{console.log(error),this.msg=JSON.parse(error.error).message});
  }


}
