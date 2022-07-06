import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedidos } from 'src/app/model/Pedidos';
import { Produtos } from 'src/app/model/Produtos';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { PedidosService } from 'src/app/service/pedidos.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todos-produtos',
  templateUrl: './todos-produtos.component.html',
  styleUrls: ['./todos-produtos.component.css']
})
export class TodosProdutosComponent implements OnInit {

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
    public authservice: AuthService,
    private router: Router
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
          title: 'Produto adicionado ao carrinho com sucesso!',
          icon: 'success'
      })
        this.compra = new Pedidos
      })
    })
  }

  finalizar(){
    return this.router.navigate(['/pedidos', this.getProdById])
  }


  adicionarAoCarrinho(id: number) {
    this.carrinho.push(id)
    Swal.fire({
      title: 'Produto adicionado ao carrinho!',
      icon: 'success'
  })
    //alert("Produto adicionado ao carrinho!")
  }

}
