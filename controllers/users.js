/**
 * Created by victorzaragoza on 20/10/2016.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.findAll = function(req, res){
    User.find({},function(err, results) {
        return res.send(results);
    });
};

exports.findById = function() {
    var id = req.params.id;
    User.findOne({'_id':id},function(err, result) {
        return res.send(result);
    });
};

exports.add = function() {
    User.create(req.body, function (err, user) {
    if (err) return console.log(err);
    return res.send(user);
});};

exports.update = function() {
    var id = req.params.id;
    var updates = req.body;

    User.update({"_id":id}, req.body,
        function (err, numberAffected) {
            if (err) return console.log(err);
            console.log('Updated %d users', numberAffected);
            return res.send(202);
        });
};
exports.delete = function() {
    var id = req.params.id;
    User.remove({'_id':id},function(result) {
        return res.send(result);
    });
};
