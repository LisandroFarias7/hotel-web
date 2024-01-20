/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    imageUrl: string;

    @Column()
    image: string;

    @Column()
    title: string;

    @Column() 
    description: string;
}
