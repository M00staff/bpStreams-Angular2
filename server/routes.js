

module.exports = function( app ) {

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
      res.sendFile('index.html', { root: './'}); // load our public/index.html file
  });

}
