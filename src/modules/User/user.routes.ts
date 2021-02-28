import { Router } from 'express';

import ensureAuthenticated from 'shared/middlewares/ensureAuthenticated';
import UsersController from 'modules/User/controllers/UsersController';
import SessionsController from 'modules/User/controllers/SessionsController';

const usersController = new UsersController();
const sessionsController = new SessionsController();

const userRouter = Router();

userRouter.post('/create', usersController.create);
userRouter.post('/authenticate', sessionsController.create);
userRouter.get('/list/posts/:id', ensureAuthenticated, usersController.listAllPosts);
userRouter.get('/post/:id', ensureAuthenticated, usersController.listPost);

export default userRouter;
