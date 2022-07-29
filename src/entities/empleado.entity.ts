import { PrimaryGeneratedColumn,Column, Entity } from "typeorm";
import { BasicEntity } from "../config/basic.entity";

@Entity({ name: "empleado" })
export class EmpleadoEntity extends BasicEntity {
  
  @Column()
  username?: string;

  @Column()
  password?: string

  @Column({ length: 1000 })
  name!: string;

  @Column()
  lastname!: string;

  @Column({ nullable: false, default:0 })
  jobPosition?: number;//?-->Opcional

  @Column({length: 12})
  numberPhone!: string;
}