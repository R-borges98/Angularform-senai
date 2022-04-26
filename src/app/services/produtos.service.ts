import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url = "http://localhost:3000/produtos"

  constructor(private httpClient:HttpClient) { }

  getProdutos(): Observable<Produtos[]>{
    return this.httpClient.get<Produtos[]>(this.url)
  }
}
