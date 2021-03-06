require('dotenv').config({ silent: true });

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const database = require('./database');
const router = require('./routes');
const path = require('path');
const logger = require('./middleware/logger');
const { devMiddleware, hotMiddleware } = require('./middleware/webpack');

const app = express();

app.set('x-powered-by', false);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
} else {
  app.use(devMiddleware);
  app.use(hotMiddleware);
}

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.resolve('build', 'index.html'));
  } else {
    res.write(devMiddleware.fileSystem.readFileSync(path.resolve('build', 'index.html')));
    res.end();
  }
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Express started at http://localhost:%d\n', server.address().port);
  try {
    database.connect();
    console.log('database connection');
  } catch(err) {
    console.error(err);
  }
  if (process.env.NODE_ENV !== 'production') {
    console.log('Waiting for webpack...\n');
  }
});
