const router = require('express').Router();
let Award = require('../models/awards.model');

router.route('/').get((req,res) => {
    Award.find()
        .then(awards => res.json(awards))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const type = req.body.type;
    const point = req.body.point;
    const color = req.body.color;
    
    const newAward = new Award({
        name,
        type,
        point,
        color
    });

    newAward.save()
        .then(() => res.json('save data'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;