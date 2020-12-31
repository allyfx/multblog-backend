import { Router } from 'express';

import userRouter from 'modules/User/user.routes';

const routes = Router();

routes.use('/users', userRouter);

export default routes;