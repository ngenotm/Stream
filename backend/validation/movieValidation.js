const joi = require('joi');


exports.createMovieValidation = (req, res, next) => {
    if (!req.files.thumbnail) return res.status(400).json({ status: 400, message: "Thumbnail is required" });
    const thumbnailUrl = req.files.thumbnail[0].filename;

    if (!req.files.trailer) return res.status(400).json({ status: 400, message: "Trailer is required" });
    const trailerUrl = req.files.trailer[0].filename;

    if (!req.files.cover) return res.status(400).json({ status: 400, message: "Cover is required" });
    const coverUrl = req.files.cover[0].filename

    if (req.files.files) {
        const fileUrls = req.files.files.map(file => file.filename);
        req.body.files = fileUrls.map((url, index) => ({
            quality: "1080p",
            url
        }));
    }

    req.body.thumbnail = thumbnailUrl;
    req.body.trailer = trailerUrl;
    req.body.cover = coverUrl;

    const schema = joi.object({
        title: joi.string().required(),
        description: joi.string(),
        director: joi.string().required(),
        releaseDate: joi.string().required(),
        duration: joi.number().required(),
        genres: joi.array().items(joi.string()).required(),
        category: joi.array().items(joi.string()).required(),
        country: joi.string().required(),
        language: joi.string().required(),
        ageRating: joi.string(),
        productionCompany: joi.string(),
        rottenRating: joi.number().required(),
        imdbRating: joi.number().required(),
        awards: joi.array().items(joi.object({
            name: joi.string().required(),
            year: joi.string().required()
        })),
        boxOffice: joi.object({
            budget: joi.number(),
            gross: joi.number()
        }),
        top250rank: joi.number().min(1).max(250),
        releaseStatus: joi.string().valid('now showing', 'coming soon', 'expired').default('now showing'),
        actors: joi.array().items(joi.string()),
        thumbnail: joi.string().required(),
        trailer: joi.string().required(),
        cover: joi.string().required(),
        pictures: joi.array().items(joi.string())
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 400, message: error.details.map(d => d.message) });

    next();
}


//! must add 