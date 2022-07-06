import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-busca-produto',
  templateUrl: './busca-produto.component.html',
  styleUrls: ['./busca-produto.component.css']
})
export class BuscaProdutoComponent implements OnInit {

  nomeProcurado: string
  produtos: Produtos[]
  teste = [1,2,3,4,5,6,7,8,9,10]

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private router: Router
    ) { }

  ngOnInit() {
    let nome = this.route.snapshot.params['nome']
    this.findByNomeProduto(nome)

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let nome = event.url
        nome = nome.split('/')[2]
        this.findByNomeProduto(nome)
      }
   })

  }

  findByNomeProduto(nome: string) {
    this.produtoService.getProdutosByNome(nome).subscribe((resp: Produtos[])=>{
      this.produtos = resp
    })
    this.nomeProcurado = nome
    /* console.log(nome) */
  }

}
