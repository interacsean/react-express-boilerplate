
// Controllers
var contactController = require('./controllers/contact');

module.exports = function(app) {
  app.post('/contact', contactController.contactPost);
};
