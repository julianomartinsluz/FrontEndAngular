import { ClientesService } from './../clientes.service';
import { Clientes } from './../clientes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  clientes: Clientes[]
  displayedColumns = ['id', 'name', 'idade','action']

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
   this.clientesService.read().subscribe(clientes => {
    this.clientes = clientes
   })
    
  }

}
