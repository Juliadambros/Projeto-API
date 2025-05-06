import { Router } from "express";
import UsersController from "../controllers/UsersController";
import { celebrate, Joi, Segments } from "celebrate";

const usersRoutes = Router();
const usersController =  new UsersController();

usersRoutes.get('/', async(req, res, next)=>{
    try{
        await usersController.index(req, res, next);
    }catch(err){
        next(err);
    }
});

usersRoutes.post('/', celebrate({
    [Segments.BODY] : {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    }
}),async(req, res, next)=>{
    try{
        await usersController.create(req, res, next);
    }catch(err){
        next(err);
    }
});

export default usersRoutes;