import { IsString, IsEmail, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsEmail() public email : string ;


    @MinLength(8) @IsString() public password: string ;
}