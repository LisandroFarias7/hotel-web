/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Check {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: false, unique: true})
    checkIn: Date;

    @Column({nullable: false, unique: true})
    checkOut: Date;

    @Column({nullable: false})
    guests: number;

    @Column({nullable: false, unique: true})
    phone: string;
}
