const joi = require('joi');

exports.createUserValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(30).required()
    });
    return schema.validate(data)
};

exports.loginValidation = (data) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).max(30).required()
    });
    return schema.validate(data)
};