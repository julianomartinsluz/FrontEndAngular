import { Observable } from 'rxjs';
import { Clientes } from './clientes.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  baseUrl = "http://localhost:3001/clientes"

  constructor(private snackbar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",

    })
  }

  create(clientes: Clientes): Observable<Clientes>{
    return this.http.post<Clientes>(this.baseUrl, clientes)
  }

  read(): Observable<Clientes[]>{
return this.http.get<Clientes[]>(this.baseUrl)
  }
}
