import { Entity, PrimaryGeneratedColumn, Column , AfterInsert} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn() public id: number ;

    @Column() public email: string ;

    @Column() public password: string ;

    @AfterInsert()
    logInsert() {
        
        console.log(`inserted ${this.id} user`);
        
    }
}