require('dotenv').config();
process.env.PAIRING_CODE = 'true';
process.env.AUTO_UPDATE = 'false';

console.log("🚀 Starting bot with pairing code mode...");

require('./index.js');