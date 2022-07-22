import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Pedidos } from '../model/Pedidos';
import { Produtos } from '../model/Produtos';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PedidosService } from '../service/pedidos.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  carrinho = environment.carrinho
  produto: Produtos = new Produtos()
  listaProdutos: Array<Produtos> = []
  soma = 0

  constructor(
    private produtoService: ProdutosService,
    private router: Router
    ) { }

  ngOnInit() {
    this.carrinhoCompleto()
  }

  findProdutoById(id: number) {
    this.produtoService.getProdutoById(id).subscribe((resp: Produtos)=>{
      this.produto = resp
      this.soma += this.produto.valorProduto
      this.listaProdutos.push(this.produto)
    })
  }

  carrinhoCompleto() {
    for(let item in this.carrinho){
      if(this.carrinho[item] > 0) {
        let id = this.carrinho[item]
        this.findProdutoById(id)
      }
    }
  }
  finalizarCompra() {
    if(environment.token == '') {
      Swal.fire({
        title: 'Você precisa estar logado!',
        icon: 'warning'
      }
      )
      this.router.navigate(['/login'])
     
    } else if(this.listaProdutos.length > 0) {
      Swal.fire({
        title: 'Obrigada pela compra!',
        icon: 'success'
      }
      )
     
      this.listaProdutos = []
      environment.carrinho = [0]
      this.router.navigate(['/template'])
      } else {
        Swal.fire({
          title: 'Seu carrinho está vazio!',
          icon: 'warning'
        }
        )
      
      }
  }

  cancelar(){
    this.router.navigate(['/pedidos'])
    this.listaProdutos = []
    environment.carrinho = [0]
    this.soma= 0
  }
}
