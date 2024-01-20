/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'client'})
export class Client {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cardName: string;

    @Column()
    cardNumber: string;

    @Column()
    cardCode: number;

    @Column()
    dateCard: string;

    @Column()
    email: string;

    @Column()
    phone: string;
}
