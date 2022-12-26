import { Entity, PrimaryGeneratedColumn, Column} from "typeorm" ;


@Entity()
export class Report {
    @PrimaryGeneratedColumn() public id: number ;
    @Column() public  price : number ;
}