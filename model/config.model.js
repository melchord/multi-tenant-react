const configs = require('../db/configs.json');

function getClientConfig(clientId) {
  return configs.find((conffig) => configs.clientId == clientId);
}

module.exports = {
  getClientConfig,
};
