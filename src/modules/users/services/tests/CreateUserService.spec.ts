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
  beforeEach(() => {
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

  it('should be able to create a new user', async()=>{
    const user = await createUser.execute({
        name:"Vitor Pio",
        email:"vitor@example.com",
        password:"123456"
    })
    expect(user).toHaveProperty("id");
  })
  it('should sent the email after create a new user', async()=>{
    const sendEmail = jest.spyOn(fakeEmailProvider, 'sendEmail');
  })
});
