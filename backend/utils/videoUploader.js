const multer = require('multer');
const shortid = require("shortid");
const path = require("path"); // Ensure path is required for filename extension extraction
const Series = require('../model/seriesModel');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir;
        switch (file.fieldname) {
            case 'thumbnail':
            case 'pictures':
                dir = 'public/thumbnail';
                break;
            case 'cover':
                dir = 'public/cover';
                break;
            case 'trailer':
                dir = 'public/trailer';
                break;
            case 'files':
                dir = 'public/videos';
                break;
            default:
                dir = 'public/';
        }
        cb(null, dir);
    },
    filename: async (req, file, cb) => {
        const ext = path.extname(file.originalname);

        if (req.body.episodeNumber) {
            const {seasonNumber,episodeNumber, seriesTitle} = req.body;
            const title = seriesTitle.replace(/\s+/g, '-');
            cb(null, `${title}-Season${seasonNumber}Episode${episodeNumber}-${shortid.generate()}-streamvibe${ext}`);
        }
        else {
            const title = req.body.title.replace(/\s+/g, '-');
            cb(null, `${title}-${req.body.release_date}-${shortid.generate()}-streamvibe${ext}`);
        }
    },
});

const upload = multer({ storage });


//! movie controller
exports.movieUploader = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: "cover", maxCount: 1 }, { name: 'trailer', maxCount: 1 }, { name: 'files' }]);

//! series controller
exports.seriesUploader = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: "cover", maxCount: 1 }, { name: 'trailer', maxCount: 1 }]);

//! episode controller
exports.episodeUploader = upload.fields([{ name: 'files' }, { name: 'pictures', maxCount: 2 }]);