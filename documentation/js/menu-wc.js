'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ecommerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a10bca3125d20e177a99ef541d11d8887cb94ae1106f19bf449a59ad745f2595f31de9a513d1603be1d38db175ec4a903e473a09a0f740f7686061df14d332c6"' : 'data-target="#xs-components-links-module-AppModule-a10bca3125d20e177a99ef541d11d8887cb94ae1106f19bf449a59ad745f2595f31de9a513d1603be1d38db175ec4a903e473a09a0f740f7686061df14d332c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a10bca3125d20e177a99ef541d11d8887cb94ae1106f19bf449a59ad745f2595f31de9a513d1603be1d38db175ec4a903e473a09a0f740f7686061df14d332c6"' :
                                            'id="xs-components-links-module-AppModule-a10bca3125d20e177a99ef541d11d8887cb94ae1106f19bf449a59ad745f2595f31de9a513d1603be1d38db175ec4a903e473a09a0f740f7686061df14d332c6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuscaProdutoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscaProdutoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadastrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarrosselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarrosselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComponentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComponentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DestaqueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DestaqueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JogosAppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JogosAppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PedidosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PedidosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProdutosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutosEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProdutosEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutosListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProdutosListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SobreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SobreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodosProdutosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodosProdutosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Pedidos.html" data-type="entity-link" >Pedidos</a>
                            </li>
                            <li class="link">
                                <a href="classes/Produtos.html" data-type="entity-link" >Produtos</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link" >UserLogin</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PedidosService.html" data-type="entity-link" >PedidosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProdutosService.html" data-type="entity-link" >ProdutosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});