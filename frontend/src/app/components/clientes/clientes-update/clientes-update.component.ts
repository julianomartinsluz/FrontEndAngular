import { ActivatedRoute } from '@angular/router';
import { Clientes } from './../clientes.model';
import { Router } from '@angular/router';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {

  clientes: Clientes

  constructor(private ClientesService: ClientesService, private Router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ClientesService.readById(id).subscribe(clientes => {
      this.clientes = clientes
    });


  }

  updateClientes(): void {
    this.ClientesService.update(this.clientes).subscribe(() => {
      this.ClientesService.showMessage('Cadastro de Cliente alterado com sucesso!')
      this.Router.navigate(['/clientes']);

    })

  }

  cancelar(): void {
    this.Router.navigate(['/clientes'])
  }

}
