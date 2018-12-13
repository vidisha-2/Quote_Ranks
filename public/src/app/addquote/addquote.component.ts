import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {
  authorId = this._httpService.oneId
  author: any;
  newQuote: any;
  errors:any;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newQuote = {content:""};
    this.author={name:""};
    this.getAuthor();
  }
  getAuthor(){
    let observable = this._httpService.show(this.authorId);
    observable.subscribe(data => {
      console.log("Got one", data);
      this.author = data;
    })
  }
  addQuoteOnSubmit(){
    console.log(this.authorId, this.newQuote);
    let observable = this._httpService.addQuote(this.authorId,this.newQuote);
    observable.subscribe(data => {
        if(data['errors']){
        this.errors = data['errors']['quotes']['errors'];
        console.log(this.errors);       
      }
      else{
        console.log("added successfully");
      this._router.navigate(['/quotes']);
      }
    })
  }

}
