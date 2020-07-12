const app = require('./index');

app.set('port', process.env.PORT || 3001);

var server = app.listen(
  app.get('port'), () => {
    console.log('Express at [%o]',
      server.address()
  );
});
