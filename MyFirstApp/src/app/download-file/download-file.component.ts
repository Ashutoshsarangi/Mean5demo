import { DataSendService } from './../data-send.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {
  fileDetails=[];
  constructor(private dataService:DataSendService) { }

  ngOnInit() {
    this.dataService.getFile().subscribe(Response=>this.fileDetails=(Response));
  }
  getFileDOwnloaded(pathName){
    //alert(pathName);
    this.dataService.postForDownload(pathName).subscribe((Response)=>console.log(Response));
  }
}
