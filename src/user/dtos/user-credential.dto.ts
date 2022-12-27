import { IsString, IsEmail, MinLength } from "class-validator";

export class UserCredentialDTO {
    @IsEmail() public email : string ;


    @MinLength(8) @IsString() public password: string ;
}