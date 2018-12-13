import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  author: any;
  storeAuthor: any;
  errors:any;;
  oneeId= this._httpService.oneId;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.author={name:""};
    this.errors={name:""};
    this.getOne(this.oneeId);
  }

   getOne(oneId){
    let ob = this._httpService.show(oneId);
    ob.subscribe(data=>{
      console.log("Got one", data);
      this.storeAuthor = data;
      this.author ={name: this.storeAuthor.name};
    })
  }
  editAuthor(){
    let ob = this._httpService.updateAuthor(this.oneeId, this.author);
    ob.subscribe(data=>{
        if(data['errors']){
        this.errors = data['errors'];
        console.log("this err", this.errors)
      }
      else{
        console.log("Updated", data);
        this.goHome();
      }
    })
  }
  goHome(){
    this._router.navigate(['/home']);
  }

}
