console.log("🚀 Starting FAM Bug Bot - Forcing Pairing Code Mode...");

process.env.PAIRING_CODE = "true";
process.env.AUTO_UPDATE = "false";
process.env.PHONE_NUMBER = "2349124173525";

// Bypass readline crash
const originalQuestion = require('readline').Interface.prototype.question;
require('readline').Interface.prototype.question = function(query, callback) {
    console.log("🔄 [BYPASS] readline question skipped");
    if (callback) callback("2349124173525");  // your number
};

require('./index.js');