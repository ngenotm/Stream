const joi = require('joi');


exports.createSupportTicketValidation = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        phoneNumber: joi.string().required(),
        message: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};


exports.updateSupportTicketValidation = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string(),
        lastName: joi.string(),
        email: joi.string().email(),
        phoneNumber: joi.string(),
        status: joi.string().valid('pending', 'in progress', 'resolved'),
        message: joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}