import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsLettersOnly(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsLettersOnly",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== "string") return false;
          return /^[A-Za-z]+$/.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} deve conter apenas letras`;
        },
      },
    });
  };
}
