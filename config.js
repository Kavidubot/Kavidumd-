const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG:process.evn.ALIVE_IMG || "https://avatars.githubsercontent.com/u/106251140?v=4",
ALIVE_MSG:process.even.ALIVE_MSG || "Hello,I am kavidumd I am alive now!",
};
