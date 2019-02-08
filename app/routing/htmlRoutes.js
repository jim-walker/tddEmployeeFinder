// Redefine path variable
var path = require('path');
// createing route handler module
module.exports = function(app) {
  // create survey html handler
  app.get('/survey', function(req, resp) {
    resp.sendFile(path.join(__dirname, '/../public/survey.html'));
  });
  // create home page handler
  app.get('/', function(req, resp) {
    resp.sendFile(path.join(__dirname, '/../public/home.html'));
  });
};