import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import multer from 'multer';
import uploadConfig from "@config/uploadImage";
import UserController from "../controllers/UsersController";

const usersRouter = Router();

const usersController = new UserController();

usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name:Joi.string().required(),
            email:Joi.string().email().required(),
            password: Joi.string().required()
        }
    }),
    usersController.create
)

export default usersRouter