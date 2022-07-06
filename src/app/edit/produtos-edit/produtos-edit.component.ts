import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.css']
})
export class ProdutosEditComponent implements OnInit {


  produtos:Produtos = new Produtos()
  idProduto:number
  categoria: string;
  equipamentos: string;

  constructor(
    private router: Router,
    private produtoService: ProdutosService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      Swal.fire({
        title: 'Sua seção expirou, faça o login novamente!',
        icon: 'error'
    })
      this.router.navigate(['/login'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }
  categoriaProd(event: any){
    this.categoria = event.target.value
  }

  equipamentosProd(event: any){
    this.equipamentos = event.target.value
  }

  findByIdProduto(id:number){
    this.produtoService.getProdutoById(id).subscribe((resp:Produtos)=>{
      this.produtos = resp
    })
  }
  atualizar(){
    this.produtoService.putProdutos(this.produtos).subscribe((resp:Produtos)=>{
      this.produtos = resp
      Swal.fire({
        title: 'Produto atualizado com sucesso!',
        icon: 'success'
    })
      this.router.navigate(['/jogos-cadastro'])
    })
  }

}
