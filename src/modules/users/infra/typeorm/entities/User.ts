import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
  ValidationArguments,
} from "class-validator";

import { Exclude } from "class-transformer";
import { IsLettersOnly } from "./customValidators/isLettersOnly";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsNotEmpty({ message: "Email is required" })
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  @IsLettersOnly({
    message: "It's not allowed to implement symbols and numbers in the name.",
  })
  @IsNotEmpty({ message: "Name is required" })
  @MaxLength(15, {
    message: "You need to pass until 15 characters",
  })
  @MinLength(5, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 1) {
        return "Too short, please pass at least 5 characters";
      } else {
        return "You need to pass at least 15 characters";
      }
    },
  })
  name: string;

  @Column({ default: "default.jpg" })
  avatar: string;

  @Column()
  @IsNotEmpty({ message: "Please, you need to pass a password" })
  @Exclude()
  @IsStrongPassword({
    minLength: 10,
    minLowercase: 2,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;

  @Column()
  passwordConfirm: string;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
