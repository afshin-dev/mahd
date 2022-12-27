import {Expose, Exclude} from "class-transformer" 
export class UserDTO {
    @Expose() public id: number ;
    @Expose() public email: string;
    @Exclude() public password: string;
}