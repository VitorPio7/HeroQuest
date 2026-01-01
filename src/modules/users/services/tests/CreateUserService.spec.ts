import "reflect-metadata";

import CreateUserService from ".././CreateUserService";

import FakeUserRepository from "../../domain/repositories/fakes/FakeUserRepository";

import AppError from "@shared/errors/AppError";

import FakeTokenGenerator from "@shared/providers/Fakes/FakeTokenGenerator";

import FakeHashProvider from "@modules/users/providers/HashProvider/fakes/fakesHashProvider";

import FakeEmailProvider from "@modules/users/providers/SenEmailProvider/Fakes/FakeEmailProvider";

let fakeUserRepository: FakeUserRepository;

let createUser: CreateUserService;

let fakesHashProvider: FakeHashProvider;

let fakeTokenGenerator: FakeTokenGenerator;

let fakeEmailProvider: FakeEmailProvider;

describe("CreateUser", () => {
  beforeEach(async () => {
    fakeUserRepository = new FakeUserRepository();
    fakesHashProvider = new FakeHashProvider();
    fakeTokenGenerator = new FakeTokenGenerator();
    fakeEmailProvider = new FakeEmailProvider();
    createUser = new CreateUserService(
      fakeUserRepository,
      fakesHashProvider,
      fakeEmailProvider,
      fakeTokenGenerator
    );
  });

  it("should be able to create a new user", async () => {
    const user = await createUser.execute({
      name: "Vitor Pio",
      email: "vitor@example.com",
      password: "123456",
    });
    expect(user).toHaveProperty("id");
  });
  it("should sent the email after create a new user", async () => {
    const sendEmail = jest.spyOn(fakeEmailProvider, "sendEmail");
    await createUser.execute({
      name: "Vitor Pio",
      email: "vitor@example.com",
      password: "123456",
    });
    expect(sendEmail).toHaveBeenCalled();
  });
  it("should hash the password", async () => {
    const hashPassword = jest.spyOn(fakesHashProvider, "generateHash");
    await createUser.execute({
      name: "Vitor Pio",
      email: "vitor@example.com",
      password: "123456",
    });
    expect(hashPassword).toHaveBeenCalled();
  });
  it("should sent the token for the user", async () => {
    const sentToken = jest.spyOn(fakeTokenGenerator, "createSendToken");
    await createUser.execute({
      name: "Vitor Pio",
      email: "vitor@example.com",
      password: "123456",
    });

    expect(sentToken).toHaveBeenCalled();
  });
  it("should sent an email", async () => {
    const sentToken = jest.spyOn(fakeEmailProvider, "sendEmail");
    await createUser.execute({
      name: "Vitor Pio",
      email: "vitor@example.com",
      password: "123456",
    });

    expect(sentToken).toHaveBeenCalled();
  });
  it("should not create two users with the same email", async () => {
    await createUser.execute({
      name: "Vitor Pio",
      email: "vitor@example.com",
      password: "123456",
    });
    await expect(
      createUser.execute({
        name: "Vitor Pio",
        email: "vitor@example.com",
        password: "123456",
      })
    ).rejects.toMatchObject({
      message: "This email already exist",
    });
  });
});
