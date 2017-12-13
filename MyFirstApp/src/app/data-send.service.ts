import { Injectable } from '@angular/core';

//import { Http } from '@angular/http'
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataSendService {
  
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
   return this.http.get("http://localhost:3000/getData");
  }
  postData(userData):Observable<any>
  {
    console.log("Inside Data Service")
    console.log(userData);
    return this.http.post("http://localhost:3000/save",userData,httpOptions);
  }
  updateData(userData):Observable<any>{
    alert("Inside update service");
    console.log(userData);
    return this.http.patch("http://localhost:3000/update",userData,httpOptions);
  }
  deleteData(name):Observable<any>{
    alert("Inside delete service");
    console.log(name);
    return this.http.delete("http://localhost:3000/delete/"+name,httpOptions);
  }
  //file Upload services Code starts here
  //directly upload file
  //file upload service code ends here

  //getting file detail for download....starts
  getFile():Observable<any>{
    return this.http.get("http://localhost:3000/getFile");
   }
   postForDownload(pathName):Observable<any>{
     alert(pathName);
     return this.http.post("http://localhost:3000/postfileDownload",{name:pathName});
   }
  //getting file detail for download ends
}