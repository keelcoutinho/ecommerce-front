import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUrl: string = 'https://ecommerce-aw.herokuapp.com/usuarios';
 
  constructor(
    private http: HttpClient

  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token),
  };
 
  getAllUsuarios():Observable<User[]>{
    return this.http.get<User[]>('https://ecommerce-aw.herokuapp.com/usuarios/all')

  }

  buscarTodos(): Observable<UserLogin[]>{
    return this.http.get<UserLogin[]>(`${this.userUrl}/all`)
  }
 
  login(userLogin: UserLogin): Observable<UserLogin> {

    return this.http.post<UserLogin>('https://ecommerce-aw.herokuapp.com/usuarios/logar', userLogin)

  }

  cadastrar(user: User): Observable<User> {
    
    return this.http.post<User>('https://ecommerce-aw.herokuapp.com/usuarios/cadastrar', user)
  } 

  atualizar(user: User): Observable<User> {
    return this.http.put<User>('https://ecommerce-aw.herokuapp.com/usuarios/atualizar/', user, this.token)
  }

 

  getByIdUsuario(id: number): Observable<User>{
    return this.http.get<User>(`https://ecommerce-aw.herokuapp.com/usuarios/${id}`, this.token)
  }


  
  deletarUsuario(id: number): Observable<User>{
    return this.http.delete<User>(`https://ecommerce-aw.herokuapp.com/usuarios/${id}`, this.token)
  }

  
  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }


  userId() {
    let id: number = 0
    if (environment.idUsuario != 0){
      id = environment.idUsuario
    }
    return id
  }


  refreshToken(){
    this.token={
      headers: new HttpHeaders().set("Authorization", environment.token),
    };
  }
 
}

