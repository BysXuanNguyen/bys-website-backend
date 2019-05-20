export default class ResponseHandler {
    static returnSuccess(res, message, data) {
        if (res) {
            return res.status(200).json({
                isSuccess: true,
                message,
                data
            });
        }
        return data;
    }

    static returnError(res, e) {
        console.error(e);
        return res.status(400).json({
            isSuccess: false,
            message: e.message || 'Have error',
        });
    }

} 