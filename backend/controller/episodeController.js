const Episode = require('../model/episodeModel');
const Season = require('../model/seasonModel');
const { episodeUploader } = require('../utils/videoUploader');
const { createEpisodeValidation } = require('../validation/episodeValidation');

//! Single Episode
exports.getEpisode = async (req, res) => {
    try {
        const episode = await Episode.findById(req.params.id);
        if (!episode) return res.status(404).json({ status: 404, message: "Episode not found" });

        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            episode
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
};

exports.getEpisodesBySeason = async (req, res) => {
    const { seasonId } = req.params;

    if (!isValidObjectId(seasonId)) return res.status(400).json({ status: 400, message: "Invalid ID" });

    try {
        const episodes = await Episode.find({ season: seasonId });
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            episodes
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
}

exports.createEpisode = [episodeUploader, createEpisodeValidation, async (req, res) => {
    //! must send seriesTitle in the body
    try {
        if (req.files.pictures) {
            const pictureUrls = req.files.pictures.map(picture => picture.filename);
            req.body.pictures = pictureUrls;
        }
        else return res.status(400).json({ status: 400, message: "Pictures are required" });
        if (req.files.files) {
            const fileUrls = req.files.files.map(file => file.filename);
            req.body.files = fileUrls.map((url, index) => ({
                quality: "1080p",
                url
            }));
        }

        else return res.status(400).json({ status: 400, message: "Files are required" });

        const season = await Season.findOne({ series: req.body.series, seasonNumber: req.body.seasonNumber });
        if (!season) return res.status(404).json({ status: 404, message: "Season not found" });

        const newEpisode = await Episode.create(req.body);
        //! push episode id to season model
        season.episodes.push(newEpisode._id);
        await season.save();

        res.status(201).json({
            status: 201,
            message: 'Episode created successfully',
            episode: newEpisode
        });
    } catch (err) {
        res.status(400).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
}];

//! must edit this controller
exports.updateEpisode = async (req, res) => {
    try {
        const episode = await Episode.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 200,
            message: "Episode updated successfully",
            data: {
                episode
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
};

exports.deleteEpisode = async (req, res) => {
    try {
        const episode = await Episode.findByIdAndDelete(req.params.id);
        if (!episode) return res.status(404).json({ status: 404, message: "Episode not found" });
        res.status(200).json({
            status: 204,
            message: "Episode deleted successfully",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
};