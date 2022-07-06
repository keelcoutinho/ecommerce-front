import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  @Input() isHeader: boolean;

  nomeProcurado: string

  usuario: User = new User()

  nome = environment.nome 
  id = environment.idUsuario
  email = environment.usuario
  token = environment.token

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    // window.scroll(0,0)
    
  }

  ngAfterContentChecked() {
    this.token = environment.token    
    this.nome = environment.nome
  }

  Enviar() {
  
    Swal.fire(
      'Enviado!',
      'Seu e-mail foi enviado com sucesso!',
      'success'
    )      
    
  }

  sair(){
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.nome = ''
    environment.usuario = ''
    environment.idUsuario = 0
  }

  adm(){
    if (environment.nome == "Admin"){
      this.router.navigate(["/jogos-cadastro"])
    }
    else{    
      
      Swal.fire({
        title: 'Você não tem permissão de administrador',
        icon: 'error'
      })       
      
    }
  }
}
