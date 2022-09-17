import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
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

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']

    })
  }

  create(clientes: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.baseUrl, clientes).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }



  read(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Clientes> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Clientes>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )

  }

  update(clientes: Clientes): Observable<Clientes> {
    const url = `${this.baseUrl}/${clientes.id}`
    return this.http.put<Clientes>(url, clientes).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Clientes> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Clientes>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('Ocorreu um Erro!', true)
    return EMPTY

  }
}

