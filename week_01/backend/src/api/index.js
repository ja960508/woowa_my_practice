import { Router } from 'express';
import sessionMiddleware from '../middleware/sessionMiddleware.js';
import auth from './auth/index.js';
import board from './board/index.js';

const router = Router();

router.use('/auth', auth);
router.use('/board', board);

export default router;
