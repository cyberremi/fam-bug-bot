// start.js - Force pairing code for Railway
console.log("🚀 Starting FAM Bug Bot with Pairing Code...");

process.env.PAIRING_CODE = "true";
process.env.AUTO_UPDATE = "false";
process.env.PHONE_NUMBER = "2349124173525";

require('./index.js');