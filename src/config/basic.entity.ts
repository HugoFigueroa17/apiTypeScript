import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, Column} from "typeorm";

  
  export abstract class BasicEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @CreateDateColumn({
      name: "created_ad",
      type: "timestamp",
    })
    createdAd!: Date;
  
    @UpdateDateColumn({
      name: "updated_ad",
      type: "timestamp",
    })
    updatedAt!: Date;

    @Column({default:1})
    status!:number;
  }
