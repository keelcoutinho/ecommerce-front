import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedidos } from 'src/app/model/Pedidos';
import { Produtos } from 'src/app/model/Produtos';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { PedidosService } from 'src/app/service/pedidos.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {
  carrinho = environment.carrinho
  produtos: Produtos = new Produtos()
  idProd:number

  pedido: Pedidos = new Pedidos()

  usuario: User = new User()
  idUser = environment.idUsuario


  constructor(
    private produtoService: ProdutosService,
    public authservice: AuthService,
    public pedidoService: PedidosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    // if(environment.token == ""){
    //   alert("Sua seção expirou, faça o login novamente.")
    //   this.router.navigate(["/login"])
    // }

    this.produtoService.refreshToken()
    this.idProd = this.route.snapshot.params['id']
    this.getProdById();
    this.getUserById()

  }

  getProdById(){
    this.produtoService.getProdutoById(this.idProd).subscribe((resp: Produtos) =>{
      this.produtos = resp

      // this.idCat = this.produto.categoria.id

    })
  }

  getUserById(){
    this.authservice.getByIdUsuario(this.idUser).subscribe((resp: User) => {
      this.usuario = resp
      console.log(this.usuario)
    })
  }



  addProdutos(){
    this.pedido.usuarios = this.usuario

    this.pedido.produtos = this.produtos

    console.log(this.pedido)
    this.pedidoService.postCompras(this.pedido).subscribe((resp: Pedidos) => {
      this.pedido = resp;
      Swal.fire({
        title: 'Produto adicionado ao carrinho!',
        icon: 'success'
    })
      this.pedido = new Pedidos
    })
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
