import { Router } from 'express';

import userRouter from 'modules/User/user.routes';
import postRouter from 'modules/Post/post.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/post', postRouter);

export default routes;