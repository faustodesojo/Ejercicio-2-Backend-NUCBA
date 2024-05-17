import { Router } from 'express';
import { createUser, getUser, getUserById } from '../controllers/user';


const userRoutes = Router();

userRoutes.get('/', getUser);
userRoutes.post('/', createUser);
userRoutes.get('/:_id', getUserById);

export default userRoutes;
