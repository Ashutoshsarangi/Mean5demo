import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DataSendService } from '../data-send.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app';
  user=[];
  getUserList=[];
  food={};
  data={};
  
  constructor( private dataService:DataSendService,private toastr: ToastsManager, private vcr: ViewContainerRef,)
   {
    this.toastr.setRootViewContainerRef(vcr);
   }
  
  
  
  popToast() {
    console.log("pop not");
    this.toastr.success("Success", 'You are on right track.');
    this.toastr.error('This is not good!', 'Oops!');
    this.toastr.warning('You are being warned.', 'Alert!');
    this.toastr.info('Just some information for you.');
    this.toastr.custom('<span style="color: red">Message in red. BY Ashutosh</span>', null, {enableHTML: true});
  }
  saveUSer(user){
  
    this.food["fish"]=user.fish;
    this.food["egg"]=user.egg;
    this.food["ckn"]=user.ckn;
    if(!user.name){
      this.data["name"]="";
    }
    else{
      this.data["name"]=user.name;
    }
    if(!user.address){
      this.data["address"]="";
    }
    else{
      this.data["address"]=user.address;
    }
    if(!user.gender){
      this.data["gender"]="";
    }
    else{
      this.data["gender"]=user.gender;
    }
    if(!user.grade){
      this.data["grade"]="";
    }
    else{
      this.data["grade"]=user.grade;
    }
    this.data["food"]=this.food;
    //console.log(this.data);
    this.dataService.postData(this.data).subscribe(() => alert("Done"));
  }
  updateData(user){
    this.dataService.updateData(user).subscribe(()=>alert("Update Done"));
  }
  editData(userData){
    this.user=userData;
  }
  deleteData(name){
    this.dataService.deleteData(name).subscribe(()=>alert("data Deleted"));
  }
  ngOnInit(): void {
    this.dataService.getData().subscribe((response)=> this.getUserList=(response));
    
  }

}
