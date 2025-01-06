const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../models/upload'); // Import the multer setup


router.get('/register', (req, res) => {
    res.render('register', { title: 'Sign Up' });
  });

router.post('/register', userController.registerUser);

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});
router.post('/login', userController.loginUser);

// Example route to create a new user with profile image upload
router.post('/register', upload.single('profileImg'), async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body
    console.log('Uploaded File:', req.file); // Log the uploaded file info
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            profileImg: req.file ? req.file.filename : '' // Store the filename if a file was uploaded
        });
        await newUser.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error registering user');
    }
});

module.exports = router;
