const multer = require('multer');
const path = require('path');

// Configure storage settings
const storage = multer.diskStorage({
    // Set the destination for uploaded files
    destination: (req, file, cb) => {
        // Ensure the uploads directory exists
        cb(null, './public/uploads/');
    },
    // Set the filename for uploaded files
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        // Use the original field name and unique suffix for the filename
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// Create the upload middleware
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB (optional)
    fileFilter: (req, file, cb) => {
        // Accept only certain file types (optional)
        const filetypes = /jpeg|jpg|png|gif/; // Allowed file types
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Error: File upload only supports the following filetypes - ' + filetypes));
        }
    }
});

// Export the upload middleware
module.exports = upload;
