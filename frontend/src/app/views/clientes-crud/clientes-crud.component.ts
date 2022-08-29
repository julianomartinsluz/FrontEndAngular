import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-clientes-crud',
  templateUrl: './clientes-crud.component.html',
  styleUrls: ['./clientes-crud.component.css']
})
export class ClientesCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToClientesCreate(): void{
    this.router.navigate(['/clientes/create'])
  }

}
