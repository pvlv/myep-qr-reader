const express = require('express');

const app = express();
app.use('/', express.static('public'));
app.use('/libs', express.static('libs'));

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  console.log(`> listening on port ${port}`);
});
