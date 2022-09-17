import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClientesService } from './../clientes.service';
import { Clientes } from './../clientes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent implements OnInit {

  clientes: Clientes

  constructor(
    private ClientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ClientesService.readById(id).subscribe(clientes => {
      this.clientes = clientes
    })

  }


  deleteClientes(): void {
    this.ClientesService.delete(this.clientes.id).subscribe(() => {
      this.ClientesService.showMessage('Cliente excluido com sucesso')
      this.router.navigate(['clientes'])

    })

  }

  cancelar(): void {
    this.router.navigate(['/clientes'])


  }


}
