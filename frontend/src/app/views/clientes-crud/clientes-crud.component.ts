import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-clientes-crud',
  templateUrl: './clientes-crud.component.html',
  styleUrls: ['./clientes-crud.component.css']
})
export class ClientesCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: 'person_add',
      routeUrl: '/clientes'
    }
   }

  ngOnInit(): void {
  }

  navigateToClientesCreate(): void{
    this.router.navigate(['/clientes/create'])
  }

}
