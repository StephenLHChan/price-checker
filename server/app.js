const express = require('express');
const cookieParser = require('cookie-parser');

const { json, urlencoded } = express;

const app = express();
const port = 3080;

require('dotenv').config();

app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use(require('./routes/api/auth'));
app.use('/api', require('./routes/api'));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

module.exports = app;
