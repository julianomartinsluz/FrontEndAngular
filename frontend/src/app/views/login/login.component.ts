import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username : string="";
  password : string="";
  show: boolean= false;
  submit(){
    console.log("certo" + this.username)
    this.clear();
    
  }

  clear(){
    this.username="";
    this.password="";
    this.show = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
