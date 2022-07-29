import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: User = new User();
  confirmarSenha: string;
  tipoUsuario: string;
  cpf = environment.cpfUsuario;
  erro: any;
  index = environment.idUsuario;
  // idUsuario: number

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ""){
      Swal.fire({
        title: 'Sua seção expirou, faça o login novamente!!',
        icon: 'error'
      })
      this.router.navigate(["/login"])

    }

    this.authService.refreshToken()
    let idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(idUsuario)
  }


  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar(){
    this.usuario = this.usuario
    if (this.usuario.senha != this.confirmarSenha) {
      Swal.fire({
        title: 'As senhas não coincidem, tente novamente!!',
        icon: 'error'
      })

    } else {
      this.authService.atualizar(this.usuario).subscribe((resp: User)=> {
        this.usuario = resp
        Swal.fire({
          title: 'Usuário atualizado com sucesso! Faça o login novamente.',
          icon: 'success'
        })
        this.router.navigate(["/home"])
      })
    }
  }


  findByIdUsuario(id: number){
    this.authService.getByIdUsuario(id).subscribe((resp: User)=>{
      this.usuario = resp
      this.usuario.senha = ''
    })
  }
  
  delete(): void{
    this.authService.deletarUsuario(this.index).pipe(first()).subscribe({next:()=>{
      Swal.fire({
        title: 'Conta deletada com sucesso',
        icon: 'success'
    })
    environment.token = ''
    environment.usuario = ''
    environment.nome = ''
    environment.idUsuario = 0
    this.router.navigate(["/home"])
    },
      error:(error)=>{
        this.erro = error;
        console.log(this.erro)
      }
    })
  }


}