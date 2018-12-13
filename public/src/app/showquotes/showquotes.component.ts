import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showquotes',
  templateUrl: './showquotes.component.html',
  styleUrls: ['./showquotes.component.css']
})
export class ShowquotesComponent implements OnInit {
  authors:any=[];
  author:any=[];
  authorId = this._httpService.oneId;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor(){
    let ob = this._httpService.show(this.authorId);
    ob.subscribe(data=>{
      console.log("Got one", data);
      this.author = data;
    })
  }
  deleteOnClick(id,quoteId){
    let ob = this._httpService.delQuote(id,quoteId);
    ob.subscribe(data=>{
      console.log("deleted",data);
      this.getAuthor();
    })
  }
  vote(id,quote,num){
console.log(id,quote,num);
    let ob = this._httpService.vote(id,quote._id,num+quote.vote);
    ob.subscribe(data=>{
      console.log("Upvoted",data)
      this.getAuthor();
    })
  }
}
