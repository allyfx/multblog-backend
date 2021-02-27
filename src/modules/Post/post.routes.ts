import { Router } from 'express';
import ensureAuthenticated from 'shared/middlewares/ensureAuthenticated';

import PostController from './controllers/PostController';

const postController = new PostController();

const postRouter = Router();

postRouter.get('/list/all', postController.list);
postRouter.get('/list/newests', postController.listNewests);
postRouter.post('/create', ensureAuthenticated, postController.create);
postRouter.put('/update/:id', ensureAuthenticated, postController.update);
postRouter.delete('/delete/:id', ensureAuthenticated, postController.delete);

export default postRouter;
