import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CgguardGuard } from './cgguard.guard';
import { CreateuserComponent } from './createuser/createuser.component';

import { EdituserComponent } from './edituser/edituser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ListuserbyidComponent } from './listuserbyid/listuserbyid.component';


const routes: Routes = [
  {path:'adminlogin', component:AdminloginComponent},
  {path:'createuser',component:CreateuserComponent,canActivate:[CgguardGuard], data:{role:'admin'}},
  {path:'edituser',component:EdituserComponent,canActivate:[CgguardGuard], data:{role:'admin'}},
  {path:'listuser',component:ListuserComponent,canActivate:[CgguardGuard], data:{role:'admin'}},
  {path:'listuserbyid',component:ListuserbyidComponent,canActivate:[CgguardGuard], data:{role:'admin'}}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
