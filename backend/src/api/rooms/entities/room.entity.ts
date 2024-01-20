/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
     name: 'rooms'
})
export class Room {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    imageUrl: string;

    @Column({type:'int'})
    price: number;
}
