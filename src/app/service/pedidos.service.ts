import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pedidos } from '../model/Pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  push(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token),
  };

  refreshToken(){
    this.token={
      headers: new HttpHeaders().set("Authorization", environment.token),
    };
  
  }
  getAllCompras(){
    return this.http.get<Pedidos[]>('https://ecommerce-aw.herokuapp.com/pedidos/',this.token)
  }

  getCompras(id: number): Observable<Pedidos>{
    return this.http.get<Pedidos>(`https://ecommerce-aw.herokuapp.com/pedidos/${id}`, this.token)
  }

  postCompras(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.post<Pedidos>("https://ecommerce-aw.herokuapp.com/pedidos", pedidos ,this.token)
  }

  putCompras(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.put<Pedidos>("https://ecommerce-aw.herokuapp.com/pedidos", pedidos ,this.token)
  }

  deleteCompras(id: number): Observable<Pedidos>{
    return this.http.delete<Pedidos>(`https://ecommerce-aw.herokuapp.com/${id}`, this.token)
  }
}