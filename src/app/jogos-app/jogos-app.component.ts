import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Pedidos } from '../model/Pedidos';
import { Produtos } from '../model/Produtos';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PedidosService } from '../service/pedidos.service';
import { ProdutosService } from '../service/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jogos-app',
  templateUrl: './jogos-app.component.html',
  styleUrls: ['./jogos-app.component.css']
})
export class JogosAppComponent implements OnInit {

  produtos: Produtos = new Produtos()
  listaProdutos: Produtos[]
  categoria: string;

  compra: Pedidos = new Pedidos()
  usuario: User = new User()
  idUser = environment.idUsuario
  idProd:number

  key = 'ALL'
  reverse = true


  constructor(
    private produtoService: ProdutosService,
    public carrinho: PedidosService,
    public authservice: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    // if(environment.token == ''){
    //   alert('Sua seção expirou, faça o login novamente.')
    //   this.router.navigate(['/login'])
    // }
    this.produtoService.refreshToken()
    this.findAllProdutos()
    this.getUserById()
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produtos[]) =>{
    this.listaProdutos = resp
    })
  }

  categoriaProd(event: any){
    this.key = event.target.value
  }


  getUserById(){
    this.authservice.getByIdUsuario(this.idUser).subscribe((resp: User) => {
      this.usuario = resp
      console.log(this.usuario)
    })
  }


  getProdById(id:number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produtos) =>{
      this.produtos = resp

      this.compra.usuarios = this.usuario
      this.compra.produtos = this.produtos


      this.carrinho.postCompras(this.compra).subscribe((resp: Pedidos) => {
        this.compra = resp;
        Swal.fire({
          title: 'Produto adicionado ao carrinho com sucesso!!',
          icon: 'success'
        })
        this.compra = new Pedidos
    })
  })
}
}
