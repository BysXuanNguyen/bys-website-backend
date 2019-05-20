import { Router } from 'express';
import ExpertController from '../controllers/expert.controller'
const router = new Router();

router
    .get('/api/experts', ExpertController.getAll)
    .post('/api/experts', ExpertController.addExpert);

router
    .put('/api/experts/:id', ExpertController.updateExpert)
    .delete('/api/experts/:id', ExpertController.deleteExpert);
    //.get('/messages/:id', Validate(getOneMessage), MessageController.getOneMessage);

export default router;