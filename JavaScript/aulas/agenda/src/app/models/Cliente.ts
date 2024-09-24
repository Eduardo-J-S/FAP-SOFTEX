import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsEmail } from "class-validator";

@Entity("clientes")
@Unique(['email'])
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    @IsEmail({}, { message: 'O e-mail informado não é válido' })
    email: string;
}