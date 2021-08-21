const express = require('express');
const api = require('./routes/index');
const cors = require('cors');
const app = express();
const port = 8000;

app.listen(port, () => {
  console.log('ErgoAlgo Server running on port ' + port);
});

app.use(cors({ origin: true, credentials: true }));

// Initial route
app.use('/api', api);

app.listen(8080);