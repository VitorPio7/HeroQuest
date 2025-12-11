import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function MinAndMaxLength(
  property: string,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "MinAndMaxLength",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(text: string, args: ValidationArguments) {
          return (
            text.length > args.constraints[0] &&
            text.length < args.constraints[1]
          ); // for async validations you must return a Promise<boolean> here
        },
      },
    });
  };
}
