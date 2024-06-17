const path = require('path');
const Actor = require('../model/actorModel');
const uploadImage = require('../utils/upload');
const fs = require('fs');
const { createValidation, editValidation } = require('../validation/actorValidation');

//! config uploader
const upload = uploadImage({
    fieldName: "profile",
    fileSize: "4000000",
    destination: '../public/actor',
    width: 600,
    height: 600,
    quality: 80
})


//! Get Request
exports.allActors = async (req, res) => {
    try {
        const actors = await Actor.find();
        res.status(200).json({ status: 200, actors, message: "All actors" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

exports.singleActor = async (req, res) => {
    const actorId = req.params.id;

    try {
        const actor = await Actor.findById(actorId);
        if (!actor) {
            return res.status(404).json({ message: "Actor not found" });
        }
        res.status(200).json({ status: 200, actor, message: "Actor found" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};



//! Post Request
exports.createActor = [upload, createValidation, async (req, res) => {
    try {
        const newActor = await Actor.create(req.body);
        res.status(201).json({
            status: 201, message: "Actor created", actor: newActor
        });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}];



//! Put Request
exports.updateActor = [upload, editValidation, async (req, res) => {
    const actorId = req.params.id;

    try {
        const actor = await Actor.findById(actorId);
        if (req.body.profile && actor.profile) {
            fs.unlinkSync(path.join(__dirname, '../public/actor/', actor.profile));
        }

        const updatedActor = await Actor.findByIdAndUpdate(actorId, req.body, {
            new: true,
        });

        res.status(200).json({ status: 200, message: "Actor updated", actor: updatedActor });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}];



//! Delete Request
exports.deleteActor = async (req, res) => {
    const actorId = req.params.id;

    try {
        const actor = await Actor.findByIdAndDelete(actorId);
        if (!actor) {
            return res.status(404).json({ status: 404, message: "Actor not found" });
        }
        if (actor.profile) {
            fs.unlinkSync(path.join(__dirname, '../public/actor/', actor.profile));
        }

        res.status(200).json({ status: 200, message: "Actor deleted" });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}