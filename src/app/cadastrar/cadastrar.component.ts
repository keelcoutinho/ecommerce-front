import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string



  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value

  }

  cadastrar(){

    if(this.user.senha != this.confirmarSenha){
        Swal.fire({
          title: 'As senhas informadas devem ser iguais!',
          icon: 'error'
        })


    }else{
      this.auth.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        Swal.fire({
          title: 'Usuário cadastrado com sucesso!!',
          icon: 'success'
        })
      })
    }
  }
}
