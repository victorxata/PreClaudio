/**
 * Created by victorzaragoza on 20/10/2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    email: String
});

mongoose.model('User', UserSchema);
