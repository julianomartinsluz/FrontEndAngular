import { Clientes } from './../clientes.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {

  Clientes: Clientes ={
    name: '',
    idade: null
  }

  constructor(private ClientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {


  }

  createClientes(): void {

    this.ClientesService.create(this.Clientes).subscribe(() =>{
    this.ClientesService.showMessage('Cliente criado com sucesso!')
    this.router.navigate(['/clientes'])
  })

  }
  cancelar(): void {
    this.router.navigate(['/clientes'])
  }


}
