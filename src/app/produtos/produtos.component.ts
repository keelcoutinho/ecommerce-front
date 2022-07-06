import { first } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produtos = new Produtos();
  listaProdutos: Produtos[];
  categoria: string;
  idProduto: number;
  erro: any;
  index: number;

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) { }


  ngOnInit() {
    if (environment.token == '') {

      Swal.fire({
        title: 'Você não possui autorização!',
        icon: 'error'
    })

      this.router.navigate(['/home-logado']);
    }
    this.findAllProdutos();
  }

  findAllProdutos() {
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp;
    });
  }

  categoriaProd(event: any){
    this.categoria = event.target.value
  }



  cadastrarProduto(): void {
   this.produtos.categorias = this.categoria

   this.produtosService.postProdutos(this.produtos).subscribe((resp: Produtos)=>{
    console.log(resp)
    this.produtos = resp

    Swal.fire({
      title: 'Produto cadastrado com sucesso!',
      icon: 'success'
   })
    this.findAllProdutos();
    this.produtos = new Produtos();
    this.router.navigate(["/jogos-cadastro"])
   })
  }

  delete(): void{
    this.produtosService.deletarProduto(this.index).pipe(first()).subscribe({next:()=>{
      Swal.fire({
        title: 'Produto deletado com sucesso!',
        icon: 'success'
    })
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


  atualizar(){
    this.produtosService.putProdutos(this.produtos).subscribe((resp: Produtos)=>{
      this.produtos = resp
      Swal.fire({
        title: 'Produto atualizado com sucesso!',
        icon: 'success'
    })
    })
  }

}
