import { Router } from 'express';
import ensureAuthenticated from 'shared/middlewares/ensureAuthenticated';

import PostController from './controllers/PostController';

const postController = new PostController();

const postRouter = Router();

postRouter.post('/create', ensureAuthenticated, postController.create);
postRouter.put('/update/:id', ensureAuthenticated, postController.update);

export default postRouter;
