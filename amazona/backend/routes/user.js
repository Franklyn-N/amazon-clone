import express from 'express';
import userController from '../controllers/user.js';

const userRouter = express.Router();

userRouter.get('/', userController.getUser);

userRouter.get('/add-user', userController.createUser);

userRouter.post('/signin', userController.signIn)


export default userRouter;