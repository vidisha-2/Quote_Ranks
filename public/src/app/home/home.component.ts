import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any=[];
  author: any=[];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    let ob = this._httpService.getAuthors();
    ob.subscribe(data=>{
      this.authors = data;
      console.log(`All authors ${data}`);
    })
  }

  sendToEditAuthor(id){
    
   this._httpService.show(id);
   this.editAu();
  }

  editAu(){
   
    this._router.navigate(['/edit/'+this._httpService.oneId]);
  }
  
  sendToViewQuotes(id){
    console.log("Im in sending", id)
    this._httpService.show(id);
    this.showQuo();
  }

  showQuo(){
     console.log("in")
    this._router.navigate(['/quotes']);
  }
}
