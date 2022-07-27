import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  formulario: FormGroup;
  
  usuarios: User = new User();
  listaUsuarios: User[];
  
  erro: any;
  index: number;
 

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ['',[Validators.required]],
      usuario: ['',[Validators.required]],
      cpfUsuario:['',[Validators.required]],      
      senha: ['',[Validators.required]]
    });
    if (environment.token == '') {

      Swal.fire({
        title: 'Você não possui autorização!',
        icon: 'error'
    })

      this.router.navigate(['/home']);
    }
    this.findAllUsuarios();
  }

  findAllUsuarios() {
    this.authService.getAllUsuarios().subscribe((resp: User[]) => {
      this.listaUsuarios = resp;
    });
  }

  cadastrarUsuario(): void {
 
    this.authService.cadastrar(this.usuarios).subscribe((resp: User)=>{
     console.log(resp)
     this.usuarios = resp
 
     Swal.fire({
       title: 'Usuário cadastrado com sucesso!',
       icon: 'success'
    })
     this.findAllUsuarios();
     this.usuarios = new User();
     this.router.navigate(["/usuarios"])
    })
   }
   

  delete(): void{
    this.authService.deletarUsuario(this.index).pipe(first()).subscribe({next:()=>{
      Swal.fire({
        title: 'Usuário deletado com sucesso!',
        icon: 'success'
    })
    this.findAllUsuarios();
    this.router.navigate(["/usuarios"])
    },
      error:(error)=>{
        this.erro = error;
        console.log(this.erro)
      }
    })
    
  }

  pegarId(id: number){
    this.index = id;
  }

}
