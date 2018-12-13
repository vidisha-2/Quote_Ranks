import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  author: any;
  errors: any;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.author ={name: ""};
    this.errors={name: ""};
  }
  createAu(){
    let observable = this._httpService.createAuthor(this.author);
    observable.subscribe(data=>{
      console.log(data);
      if(data['errors']){
        this.errors=data['errors'];
        console.log("errors here",this.errors);
      }
      else{
        this.goHome();
      }
    })
  }
  goHome(){
    this._router.navigate(['/home'])
  }
}
