var express = require('express');
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('mongodb://pmdb:pmdb123@ds135574.mlab.com:35574/pmdb', ['projects'])

router.get('/projects', function(req, res, next) {
    // res.send("project Page");
    db.projects.find(function(err, projects) {
        if (err) {
            res.send(err);
        }
        res.json(projects);
    });
});
// --- get single project
router.get('/project/:id', function(req, res, next) {
    db.projects.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, project) {
        if (err) {
            res.send(err);
        }
        res.json(project);
    });
});

// --- Save /add new proect
router.post('/project', function(req, res, next) {
    var project = req.body;
    if (!project.projectName || !(project.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.projects.save(project, function(err, project) {
            if (err) {
                res.send(err);
            }
            res.json(project);
        });
    }

});

// ---- add comment
router.put('/project/:id', function(req, res, next) {
    var comment = req.body;
    console.log('comment ', comment);
    if (!comment.message) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        // db.projects.findOne()
        db.projects.update({ _id: mongojs.ObjectId(req.params.id), "team.name": comment.name }, { $push: { "team.$.comments": { "message": comment.message, "duration": comment.duration, "date": comment.date } } });
        // db.test.update({ "heros.nickname": "test", "heros.spells.spell_id": 1 }, { $set: { "heros.0.spells.1.level": 3 } });
    }


});


module.exports = router;