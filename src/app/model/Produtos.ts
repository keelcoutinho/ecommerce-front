import { Pedidos } from "./Pedidos"

export class Produtos{
    public idProduto: number;
    public nomeProduto: string;
    public descricaoProduto: string;
    public valorProduto: number;
    public estoque: number;
    public categorias: string;
    public imagem: string;
    public pedidos: Pedidos[];
    
}