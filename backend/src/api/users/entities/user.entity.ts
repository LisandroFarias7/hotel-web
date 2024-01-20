/* eslint-disable prettier/prettier */

import { Rol } from "../../common/enums/rol.enum";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    username: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false, select: false })
    password: string;

    @Column({ type: 'enum', default: Rol.User, enum: Rol })
    rol: string;

    @DeleteDateColumn()
    deleteAt: Date;

}
