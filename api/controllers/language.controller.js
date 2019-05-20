 import { ResponseHandler } from '../helpers';
 import Language from '../models/language.model';

const LanguageController = {};

LanguageController.getAll = async (req, res, next)=>{
    try {
        let languages = await Language.find();

        return ResponseHandler.returnSuccess(res, 'success', languages);
    } catch (error) {
        return next(error);
    }
}

LanguageController.addLanguage = async (req, res, next) => {
    try {
        console.log(req.body);

        const language = await new Language(req.body).save();

        return ResponseHandler.returnSuccess(res, 'Create success', language);
    } catch (error) {
        return next(error);
    }
}

LanguageController.updateLanguage = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const language = await Language.findOne({ _id })
        if (!language) {
            return next(new Error('language is not find'));
        }
        language.set(req.body);
        await language.save();

        return ResponseHandler.returnSuccess(res, 'Update success', language);
    } catch (error) {
        return next(error);
    }
}

LanguageController.deleteLanguage = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const language = await Language.findOneAndDelete({ _id });
        if (!language) {
            return next(new Error('language is not find'));
        }
        await language.save();
        return ResponseHandler.returnSuccess(res, 'Delete success', null);
    } catch (error) {
        return next(error);
    }
}

export default LanguageController;