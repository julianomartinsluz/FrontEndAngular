import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

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
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Login',
      icon: 'login',
      routeUrl: '/login'
    }
   }

  ngOnInit(): void {
  }

}
