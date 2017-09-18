import { Component, OnInit } from '@angular/core';
import { HttpFetchService } from '../../services/http-fetch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginlist',
  templateUrl: './loginlist.component.html',
  styleUrls: ['./loginlist.component.scss'],
  providers:[HttpFetchService]
})
export class LoginlistComponent implements OnInit {
  pageData: string[]=[];
  constructor(
     private _route: ActivatedRoute,
     private _httpSrv: HttpFetchService) {
    
   }

  ngOnInit() {
     this.OnLoadLinkData();
  }

   async OnLoadLinkData(){
 /*  const url='/assets/data/loginlink.json';
   const header={
     method:'get'
   };

   try{
     const res=await fetch(url, header);
     const data=await res.json();
     console.log(data);
     data.map((item,index)=>{
        console.log(item);
     });

     this.pageData=data;
     console.log(this.pageData);

   } catch(error){
     console.log(error);
   }*/
   this.pageData=await this._httpSrv.getJSON("loginlink");
}
 
}
