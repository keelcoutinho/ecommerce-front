import { Pedidos } from "./Pedidos"

export class User{
    public idUsuario: number
    public nome: string
    public usuario: string
    public cpfUsuario: string
    public senha: string
    public pedidos: Pedidos[]
}