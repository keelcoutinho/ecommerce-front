import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { BuscaProdutoComponent } from './components/busca-produto/busca-produto.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TemplateComponent } from './components/template/template.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { JogosAppComponent } from './jogos-app/jogos-app.component';
import { ProdutosListaComponent } from './jogos-app/produtos-lista/produtos-lista.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'jogos-cadastro', component: ProdutosComponent },
  {path: 'jogos-app', component: JogosAppComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'pedidos', component: PedidosComponent}, //adicionado rota pedidos
  {path: 'produtos-lista/:id', component: ProdutosListaComponent},
  {path: 'busca-produto/:nome', component: BuscaProdutoComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
  {path: 'produtos-edit/:id', component: ProdutosEditComponent},
  //{path: 'produtos', component: ProdutosComponent},
  {path: 'template', component: TemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
