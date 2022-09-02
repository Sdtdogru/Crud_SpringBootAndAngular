import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TextService } from './services/text.service';
import { Text } from './model/Text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  text:Text[];
  typ = 'hidden';
  uId:number;
  uText:string;

  constructor(private service:TextService) {}

  ngOnInit() {
    this.getText();
  }
  
  save(f: NgForm) {
   this.service.saveText(f.value.nametext).subscribe((d)=>{console.log(d); this.getText();});
  }
  getText(){
    this.service.getText().subscribe((d)=>{console.log(d); this.text=d});
  }
  deleteText(id:number){
    this.service.deleteText(id).subscribe((d)=>{console.log(d); this.getText();});
  }
  updateText(f: NgForm){
    this.service.updateText(this.uId,f.value.nametext1).subscribe((d)=>{console.log(d); this.getText(); alert("işlem tatmlanmıştır."); this.typ='hidden'})
  }
  show(id:number,text:string){
    this.uId=id;
    this.uText=text;
    this.typ = '';
  }
  esc() {
    this.typ = 'hidden';
  }
}
