import { ResponseHandler } from '../helpers';
import Expert from '../models/expert.model';

const ExpertController = {};

ExpertController.getAll = async (req, res, next)=>{
    try {
        let experts = await Expert.find();

        return ResponseHandler.returnSuccess(res, 'success', experts);
    } catch (error) {
        return next(error);
    }
}

ExpertController.addExpert = async (req, res, next) => {
    try {
        console.log(req.body);
        const expert = await new Expert(req.body).save();

        return ResponseHandler.returnSuccess(res, 'Create success', expert);
    } catch (error) {
        return next(error);
    }
}

ExpertController.updateExpert = async (req, res, next) => {
    try {
        console.log(req.body);
        const _id = req.params.id;
        const expert = await Expert.findOne({ _id })
        if (!expert) {
            return next(new Error('language is not find'));
        }
        expert.set(req.body);
        await expert.save();

        return ResponseHandler.returnSuccess(res, 'Update success', expert);
    } catch (error) {
        return next(error);
    }
}

ExpertController.deleteExpert = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const expert = await Expert.findOneAndDelete({ _id });
        if (!expert) {
            return next(new Error('language is not find'));
        }
        await expert.save();
        return ResponseHandler.returnSuccess(res, 'Delete success', null);
    } catch (error) {
        return next(error);
    }
}

export default ExpertController;