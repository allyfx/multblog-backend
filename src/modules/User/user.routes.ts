import { Router } from 'express';

import UsersController from 'modules/User/controllers/UsersController';

const usersController = new UsersController();

const userRouter = Router();

userRouter.post('/create', usersController.create);

export default userRouter;
