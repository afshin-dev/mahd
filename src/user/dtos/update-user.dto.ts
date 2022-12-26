import {IsString, IsOptional, IsEmail} from "class-validator"
export class UpdateUserDTO {
    @IsOptional() @IsEmail() public email : string ;
    @IsOptional() @IsString() public password: string;
}