import { Router } from 'express';
import LanguageController from '../controllers/language.controller'
const router = new Router();

router
    .get('/api/languages', LanguageController.getAll)
    .post('/api/languages', LanguageController.addLanguage);

router
    .put('/api/languages/:id', LanguageController.updateLanguage)
    .delete('/api/languages/:id', LanguageController.deleteLanguage);
    //.get('/messages/:id', Validate(getOneMessage), MessageController.getOneMessage);

export default router;