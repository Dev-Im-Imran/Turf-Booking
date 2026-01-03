import express from 'express';
import { createUser, userLogin } from '../controllers/userController.js'


const router = express.Router();

router.post('/signup', createUser );
router.post('/login', userLogin );



export default router;