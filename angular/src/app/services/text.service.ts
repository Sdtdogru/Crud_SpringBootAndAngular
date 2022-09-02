import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Text } from '../model/Text';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TextService {
  text = new Text();
  baseURL: string = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  getText(): Observable<Text[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Text[]>(this.baseURL)
  }

  saveText(name:string){
    const headers = { 'content-type': 'application/json'}  
    this.text.name=name;
    const body=JSON.stringify(this.text);
    return this.http.post(this.baseURL , body,{'headers':headers})
  }
  deleteText(id:number){
    return this.http.delete(this.baseURL+id)
  }
  updateText(id:number,name:string){
    const headers = { 'content-type': 'application/json'} ;
    this.text.id=id;
    this.text.name=name;    
    const body=JSON.stringify(this.text);
    return this.http.put(this.baseURL , body,{'headers':headers})
  }
}
