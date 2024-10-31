//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0labWJiOWpOV3pTUjhwUHVCUDE2Y3VUVWtmcGd4aWlwYkJnMTZsOWpWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnVIaHFpUkpRempvc3VTSXBlWStWUGs4cXplYWE5R0U2UnV2RWJDa2RsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQzNZNVo0T1VDVTJmZ3NBeXpFSUk4Q210WDF1bnMvQlhqMWdmWE1aQjNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0TlZMekZURnN0UDZLS2l1Q1R1R20xWW5zV3dob3hraFlCblByVmhDMzM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJZEppNXpIdXA0Nzkram9pUzRqd3RqQ1VJQ0hOcUtHbUNYKzFxeFR4MTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9OMWVYZGpmb0NKN0xHZjFYdEdUeUlQZzZ3dlFPQ1Z4OGNYNkJnSExnaUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09GMlpzSmlBNmJEaUtaWHVmMHFiSnIzMlFvbCthWmFQeU1LYlFkWktuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnR6QllQZWNYcGV4YnNQMzVXOTgzWngvTHNOcXJuWmUyNTA2YVVPWU1VUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdYMUN2R0x2S0xhMmlwN00wWWF6TEFtWFphUElGdEQ0S0JpZFVnNmNwaDAxL09vU0hMRDV4TEpobU1xOHRSSUFpYk4ydnFHUThoK1lyNnFnMUhIaUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IjJlTWJsMGtDTnl6cjlWQ29YaUlJSXlJcFhCVHkyeWt1SWhqdysxckdicms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZHQUpWMENoVDlHQnFTcDEzbjlia0EiLCJwaG9uZUlkIjoiZjU4ZDQwOGEtMDFhNS00NDkyLThmNGUtMDM4ODhmY2Y0YzBkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktYeC9qQkdrNVQyL3pub0E4VHVGZnF5TC96VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZm9BekMvT2RXZUtYU1hXWHRnNGtFYnRJU289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVdFQkxaWDMiLCJtZSI6eyJpZCI6IjIzNDkwOTcyNDc3MzY6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSmF5ZGVuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS0dtdllFRU0yYmpya0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVRkZyNlF5cUxGa3BLUkV5dnMzQjk1cTEyTWF3L0xTb1c5ejhSRTd0b0JZPSIsImFjY291bnRTaWduYXR1cmUiOiIzRkNVQkNhbU1KQXZZUnVDOFBLbms1MExPSjB2a3BFRE81UDl3aG9PUTBSY2g0dHNYSG9OWHpDcGJRRTFMWXpVZHk4djRxUzRYQnpLZkR6L1NrL25CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZUVSK1RNczEwQ3F5NkdCVGhMUk1GMXZ5QVZKVG5zeW0zRlpWWjVYTDNpZTM3K2JmcVo1bytzNHBVUnNHa2tkSHNLeE9MTnZIc0VsRmwvUGh6RTI3QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDk3MjQ3NzM2OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZCUmEra01xaXhaS1NrUk1yN053ZmVhdGRqR3NQeTBxRnZjL0VSTzdhQVcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAzODMzMjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2FRIn0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
