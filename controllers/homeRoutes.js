const router = require('express').Router();
const { Posts, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const postData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        })
        //  Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('profile', { posts });

    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});




module.exports = router;