const { isValidObjectId } = require('mongoose');
const actorModel = require('../model/actorModel');
const { createActorValidation } = require('../validation/actorValidation');
const queryValidation = require('../validation/queryValidation');

//! Get Request
exports.allActors = async (req, res) => {
    try {
        const actors = await actorModel.find();
        res.status(200).json({ status: 200, actors, message: "All actors" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

exports.singleActor = async (req, res) => {
    const actorId = req.params.id;

    if (!isValidObjectId(actorId)) return res.status(400).json({ message: "Invalid Actor ID" });

    try {
        const actor = await actorModel.findById(actorId);
        if (!actor) {
            return res.status(404).json({ message: "Actor not found" });
        }
        res.status(200).json({ status: 200, actor, message: "Actor found" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};



//! Post Request
exports.createActor = async (req, res) => {
    const { fullName, date_of_birth, place_of_birth, biography, image, country } = req.body;

    try {
        const actor = await actorModel.findOne({ fullName });
        if (actor) {
            return res.status(400).json({ status: 400, message: "Actor already exists" });
        }

        if (createActorValidation(req.body).error)
            return res.status(400).json({ text: createActorValidation(req.body).error.message })


        const newActor = new actorModel({
            fullName,
            date_of_birth,
            place_of_birth,
            biography,
            image,
            country
        });
        await newActor.save();
        res.status(201).json({ status: 201, message: "Actor created", actor: newActor });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};



//! Put Request
exports.updateActor = async (req, res) => {
    const actorId = req.params.id;
    const { fullName, date_of_birth, place_of_birth, biography, image, country } = req.body;

    queryValidation(actorId, res, "Invalid Actor ID");

    try {
        const actor = await actorModel.findById(actorId);
        if (!actor) {
            return res.status(404).json({ message: "Actor not found" });
        }
        actor.fullName = fullName;
        actor.date_of_birth = date_of_birth;
        actor.place_of_birth = place_of_birth;
        actor.biography = biography;
        actor.image = image;
        actor.country = country;

        await actor.save();
        res.status(200).json({ status: 200, message: "Actor updated", actor });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};



//! Delete Request
exports.deleteActor = async (req, res) => {
    const actorId = req.params.id;

    queryValidation(actorId, res, "Invalid Actor ID");

    try {
        const actor = await actorModel.findByIdAndRemove(actorId);
        if (!actor) {
            return res.status(404).json({ status: 404, message: "Actor not found" });
        }
        res.status(200).json({ status: 200, message: "Actor deleted" });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}