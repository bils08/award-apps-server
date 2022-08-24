const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const email = req.body.email;

    const newUser = new User({email});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:email').get((req,res) => {
    User.find({'email':req.params.email})
       .then(journal => res.json(journal))
       .catch(err => res.status(400).json('Error: ' + err)); 
 });

module.exports = router;