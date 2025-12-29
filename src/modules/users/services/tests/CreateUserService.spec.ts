import "reflect-metadata";

import CreateUserService from ".././CreateUserService";

import FakeUserRepository from "../../domain/repositories/fakes/FakeUserRepository";

import AppError from "@shared/errors/AppError";

import FakeTokenGenerator from "@shared/providers/Fakes/FakeTokenGenerator";

import FakeHashProvider from "@modules/users/providers/HashProvider/fakes/fakesHashProvider";

let fakeUserRepository: FakeUserRepository;

let createUser: CreateUserService;

let fakesHashProvider: FakeHashProvider;

let fakeTokenGenerator: FakeTokenGenerator;

describe("CreateUser", () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakesHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(
      fakeUserRepository,
      fakesHashProvider,
      fakeTokenGenerator,
    );
  });
});
