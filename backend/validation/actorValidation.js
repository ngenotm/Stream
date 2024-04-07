const joi = require('joi');


exports.createActorValidation = (data) => {
    const schema = joi.object({
        fullName: joi.string().min(3).max(30).required(),
        date_of_birth: joi.string().required(),
        place_of_birth: joi.string().required(),
        biography: joi.string().default(""),
        image: joi.string().required(),
        country: joi.string().required()
    });
    return schema.validate(data)
}

