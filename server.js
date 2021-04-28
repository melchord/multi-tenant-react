const express = require('express');
const cors = require('cors');

// Setup
const PORT = process.env.SERVER_PORT || 4000;
const app = express();
app.use(cors());

// Routes
app.get('/getConfig', async function (req, res) {
  const { clintId } = req.query;
  /**
   *
   * We' ll add more code here later
   */
});

// Run server
app.listen(PORT, () => {
  console.log('Server listening on ${PORT}');
});
