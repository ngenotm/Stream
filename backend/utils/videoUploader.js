const multer = require('multer');
const shortid = require("shortid");
const path = require("path"); // Ensure path is required for filename extension extraction

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir;
        switch (file.fieldname) {
            case 'thumbnail':
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
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${req.body.title}-${req.body.release_date}-${shortid.generate()}-streamvibe${ext}`);
    },
});

const upload = multer({ storage });

module.exports = upload;