const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94763406787"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://allytshrts:BMOeqmRgUzicL9YL@clusterhhh.nsyzc7z.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'allytshrts@gmail.com'
global.github = 'https://github.com/SithumEshan45/XLICON-MD'
global.location = 'srilanka'
global.gurl = 'https://github.com/SithumEshan45' // add your username
global.sudo = process.env.SUDO || '94763406787' 
global.devs = '923184070915';
global.website = 'https://github.com/SithumEshan45/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hld2cxMnpCWWlaZkFXTUFVeUJNbTZ2TXFMWC9EVExJYjA2RzBUeWVWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFJqN2dDUjllMkxGUkdETkJ5ZThwNGY5OHAxV1N1OHFib2hwV3UwRDVCdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTXNHc1lPS0xGMDZWY3c0ZWU1MXByQVpQWXBqZGM5RFdHQUJ5ZVVUWVdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqYzVtT2xkUHBla2ZwRC9SMjVDZFZlTVN5VXZuTjkzSmlacStlamlaWm0wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdIc1FLamFUQ3VLMEcwcGxweDdpaGEyM1hhLy9BSldOcnFvU0JLWkdZMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRjK05oVG54RFpLdXlGbHlFVnpIME42VDByWGw5bzgyUzYwMFZySTlUbEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01xN2tRemV2N0xFd0lKSG5sbTVLRlM5Vy91UVZ2R09vNHUvVFpJNlRtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnRWampkN0dzT0hpaVVER0MzRC8wSUR0ZXl1OWQwMi9TbHBPc05VWGFuQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdiWXh1bnVraDgydG9WSHZkaW1Fb2lRUXI0VnFDd3lZL1VVWkZSeTJkN1A5cHJEdmU4NjZoYml2dGZieldFTkYrSU1ldHZ3NWZ4TUtFa2tvRVkzWUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkhmSjhIYlU1a3pya2dtN2V0MXdIOGN4UlJGYnJVSEJOUVQxMEt3b1RraGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InU5VzNVZzVaU0hxaTBLVzE5LXFPU3ciLCJwaG9uZUlkIjoiOTc5ZmRkZmUtNDNhYy00YzU2LTk4NDgtOGQ4YmY5MWFkYjBiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5OZG5ZNkQyYlNUOHQ2cVMwSGtwTUNhUnRObz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMUpyOCtwVzZmdHA5RjBGd01jRzN3QzFLYWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFE5TTQzVFAiLCJtZSI6eyJpZCI6Ijk0NzYzNDA2Nzg3OjQ3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKDnvCfkpnwnZeU8J2YgvCdl7/wnZeu4oSiIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZXNxK3dFRU51ZW5hNEdHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOQzFVbWJNR2U3cmQ0Zy9mWkhyQm5oS1UwZDZYRE9VQm1TQko1dUQxUTNjPSIsImFjY291bnRTaWduYXR1cmUiOiJSL3Y4VGJMcW1SOXpvS3NIMjVqa1c5cHZXY0tyN053SVFpWUFjTEl5NjVhOG0vOWtHNE5zcnFSSEVNQ3dRNG1Pa01wc2tRd0VjM3duK0tnVkh0UjlDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY2pmY1hEY2cyMDlLbmFiUWpYVjROZ3BuVE1ESmg1YkxjSWtVZFBRSS8zdWdVb0JZbWxVMGFvTGhLd0V6anREbnU0VWNub2JZUFhBbVJ6cy9DeXJtRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzQwNjc4Nzo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUUXRWSm16Qm51NjNlSVAzMlI2d1o0U2xOSGVsd3psQVprZ1NlYmc5VU4zIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA3NTYwNzk4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFZKyJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡❤️⃝™',
  packname:  process.env.PACK_NAME || '⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡❤️⃝™',
   
  botname:   process.env.BOT_NAME === undefined ? "⃞🌷Xlicon-```Md```" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡❤️⃝™' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '```Hi Iam Alive Now``` Powered By ⃞💙𝗔𝘂𝗿𝗮™' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '603b2ce8-d6134f9f-98e2-b7a1c30f0db3' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'sithumeshan455sithumeshan455' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
