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
});
