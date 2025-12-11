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
  Validate,
  ValidationArguments,
} from "class-validator";

import { Exclude } from "class-transformer";

import { IsLettersOnly } from "@shared/validators/IsLettersOnly";

import { VerifyEqualsPassword } from "@shared/validators/VerifyEqualsPassword";

import { IUser } from "@modules/users/domain/models/IUser";

import { MinAndMaxLength } from "@shared/validators/MinAndMaxLength";

@Entity("users")
class User implements IUser {
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
  @Validate(MinAndMaxLength, [3, 20], {
    message: "You need to pass characters between 2 and 21 ",
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
  @VerifyEqualsPassword("password", {
    message: "Password are not the same",
  })
  passwordConfirm: string;

  @Column({ default: false })
  isActive: Boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
