import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  author:any;
  oneId;
  constructor(private _http: HttpClient) { }
  getAuthors(){
    return this._http.get('/api/authors');
  }
  createAuthor(author){
    return this._http.post('/api/authors', author);
  }
  updateAuthor(id, newAuthor){
    return this._http.put(`/api/authors/${id}`, newAuthor);
  }
  show(id){
    this.oneId = id;
    return this._http.get(`/api/authors/${id}`);
  }
  addQuote(oneId, quote){
    return this._http.post('/api/authors/'+oneId+'/quotes', quote);
  }
  delQuote(oneId, quoteId){
    return this._http.delete('/api/authors/'+oneId+'/quotes/'+quoteId);
  }
  vote(id,quoteId,num){
    console.log("im in service");
    console.log(num);
    return this._http.get('/api/authors/'+id+'/quotes/'+quoteId+'/'+num);
  }
  
}
