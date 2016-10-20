/**
 * Created by victorzaragoza on 20/10/2016.
 */

module.exports = function(app){
    
    var users = require('./controllers/users');

    app.get('api/users', users.findAll);
    app.get('api/users/:id', users.findById);
    app.post('api/users', users.add);
    app.put('api/users/:id', users.update);
    app.delete('api/users/:id', users.delete);
};

