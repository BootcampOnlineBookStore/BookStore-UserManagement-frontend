import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Userform} from './userform';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
fullName:string;
  constructor(private http: HttpClient) { }
  public createUser(userform:Userform):Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
   return this.http.post("http://localhost:8082/booksourceusermanagement/createUser",userform,{headers:httpHeaders})
  }
  public editUser(user:User):Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.put("http://localhost:8082/booksourceusermanagement/editUser",user,{headers:httpHeaders})
  }
  public deleteUser(emailid:string):Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.delete("http://localhost:8082/booksourceusermanagement/deleteUserByEmailId/"+emailid,{headers:httpHeaders})
  }
  public listAllUsers():Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.get("http://localhost:8082/booksourceusermanagement/userList",{headers:httpHeaders})
  }
  public viewUserById(emailId:string):Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.get("http://localhost:8082/booksourceusermanagement/viewUserById"+"/"+emailId,{headers:httpHeaders})
  }
  public doLogin(email:string,password:string):Observable<any>{
    let postData = new FormData();
    postData.append('email',email);
    postData.append('password',this.encrypt(password));
    return this.http.post("http://localhost:7082/adminlogin/login",postData, {responseType:'text'});
  }
  encrypt(token:string){
    let str="";
    for(let i = 0; i < token.length; ++i){
      str = str +String.fromCharCode(token.charCodeAt(i) + 3);
    }
    return str;
  }
  decrypt(token:string){
    let str = "";
    for (let i = 0; i < token.length; ++i){
      str = str + String.fromCharCode(token.charCodeAt(i) - 3);
    }
    console.log(str);
    return str;
  }
  public doLogout(){
    let utoken = localStorage.getItem("token");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenid":utoken});
    return this.http.get("http://localhost:7082/adminlogin/logout", {headers:httpHeaders,responseType:'text'});
  }
}

