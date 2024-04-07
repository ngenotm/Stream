const joi = require('joi');

exports.createMovieValidation = (data) => {
    const schema = joi.object({
        title: joi.string().required(),
        director: joi.string().required(),
        description: joi.string().required(),
        release_date: joi.string().required(),
        duration: joi.number().required(),
        genre: joi.string().required(),
        country: joi.string().required(),
        rotten_rating: joi.number().required(),
        imdb_rating: joi.number().required(),
        thumbnail: joi.string().required(),
        cover: joi.string().required(),
        trailer: joi.string().required(),
        release_status: joi.string().required(),
        actors: joi.array().items(joi.string()),
    });
    return schema.validate(data);
}