const joi = require('joi');


exports.createValidation = (req, res, next) => {
    const schema = joi.object({
        directorId: joi.string()
            .required(),
        fullName: joi.string()
            .min(3)
            .max(50)
            .required(),
        birthDate: joi.string()
            .required(),
        birthPlace: joi.string()
            .required(),
        country: joi.string()
            .required(),
        bio: joi.string()
            .default(""),
        gender: joi.string()
            .valid("male", "female")
            .required(),
        profile: joi.string()
            .required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 400, message: error.details.map(d => d.message) });

    next();
};


exports.editValidation = (req, res, next) => {
    const schema = joi.object({
        fullName: joi.string()
            .min(3)
            .max(50),
        birthDate: joi.string(),
        birthPlace: joi.string(),
        country: joi.string(),
        bio: joi.string(),
        profile: joi.string(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 400, message: error.details.map(d => d.message) });

    next();
}