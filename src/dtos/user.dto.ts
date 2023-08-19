import { IsNotEmpty, IsString, IsUrl } from "class-validator"

export class createUserDto{
    @IsNotEmpty({ message: "All fields are required!" })
    @IsString()
    username: string

    @IsNotEmpty({ message: "All fields are required!" })
    @IsUrl()
    avatar: string
}