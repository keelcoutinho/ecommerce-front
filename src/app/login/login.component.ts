import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  userLogin: UserLogin = new UserLogin

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({      
      usuario: ['',[Validators.required]],    
      senha: ['',[Validators.required]]
    });
  }

  login(){
    this.auth.login(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp 
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.idUsuario = this.userLogin.idUsuario
      environment.cpfUsuario = this.userLogin.cpfUsuario
      environment.usuario = this.userLogin.usuario

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.idUsuario)
      console.log(environment.cpfUsuario)
      console.log(environment.usuario)
      
      this.router.navigate(['/home'])

    },
    erro => {
      if(erro.status == 401){
        Swal.fire({
          title: 'Usuário ou senha incorretos!',
          icon: 'error'
        })
      }
    }
    )

  }

}