const express = require('express');
const cors = require('cors');

const Config = require('./model/config.model');

// Setup
const PORT = process.env.SERVER_PORT || 4000;
const app = express();
app.use(cors());

// Routes
app.get('/getConfig', async function (req, res) {
  const { clientId } = req.query;
  // Receive the clientId from out client-side app
  console.log(`clientID = ${clientId}`);

  //Find the config for the particular client Id
  const clientConfig = Config.getClientConfig(clientId);

  if (!clientConfig) {
    // Return an error if it's not found
    res.status(404).send({ error: `Config not found for this clientId: ${clientId}` });
  }

  // Send the config if found
  res.send(clientConfig);
});

// Run server
app.listen(PORT, () => {
  console.log('Server listening on ${PORT}');
});
