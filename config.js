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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RtR0Vkd1BaODNENkRKYUNTNGIwUzB0K3FiSXAwOVRNWlk0Y3lJT1ZXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNtSlB3MnNVZUdCalVWbUJJM2pzdzcvWkVLWnRYTVFITC9laEdNOXVnYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSHEyNFRXRnl6SllKN3lsWGhQYlpIY2N6Qjl3bzhRK2ZUVGhHc2JuTUZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4VlRud0dPaWlINHhqclRnenYvNGZlNVNROTRmOGkyazVRVVNHNGcyRW00PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOWFI5NkFsMnRCb0pYRTZvaHNyZ0NLOFA2clNZcG5uMjR3bTBpd1ZjbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImllV2x6WkNyQ1ZndWJlbDhpWkpPTHppZ2ZiWGJxc3RES0hVeC9EY1Z4Z1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNtOHZma2tCMUJBZzh3SXlGNEhoV0J0THZMb3BjRzF5bFBXekt3cXdrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJ0REdsV083UkZVZlcxc3IwS3JHWlV0Y3pmdENUcm9JcGM0cGhPQ1BBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN2SFJUSFdTUHh1aXdpUXl4c1R3UmNkZkk0OWEzVUo2R1Z6YmFrOFJxZHU5aENORWlEZzBrQzRaZXlxQXV3MmhlQUVzVGVhY1cxelhaTjZIbVZuSGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJrcUNJUlNRWUxwaWhWRW1vOWx0QXRxc3pSMWRaSksxNmtQS202SEdBbE13PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNTY3Mzc4ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODQ2Mjg2M0I5RjNGRkRGRkU2MEQ1MUQ3NDNFRDlCQjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDM3ODkxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA1NjczNzg4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNDkxNzNFRUIyODY3QzUyQTBBMDVEQzdGQkJENjNERCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwMzc4OTE0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItU0ItTEVzLVJzdTlsVWFsTmpoYVV3IiwicGhvbmVJZCI6IjdlZTIxNDQ3LWFmYTUtNDYzMy05Y2Q4LTFlZTc3MTc0YmY0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2YVFrNUkxaXVMbE9BdVEyL1lEeXVMUmZCVXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2lseVRUejM4dVFST0NmcSszeEhsN1V1cmpRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRMR1Q3V1lIIiwibWUiOnsiaWQiOiIyMzQ5MDU2NzM3ODgxOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQURFT0xBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMkZrYzRERUpENWpia0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGVnVGaW8yamxXdVAvT2ZYaVd1cHJVcWR5eWJXY20ydTFsSXpYaGZqZlM0PSIsImFjY291bnRTaWduYXR1cmUiOiJGQnZ5cDl3ckQ3R0dHNzNmV0NZQTZKSFZVZFZIaUxzKzRZa1RoRFJPL2VOenNYdllLVWhzMmhMa2lTNmoyc1EwVzIzcTZlVitNQzVSUnM0dS94aVZDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUEY1YmM3bnhrWkxIZjdiRi83VEhRaWtUTFl3dGU3bk1GaHlXN1Fka3o2aktGS01PMTMyaU9ENGFodWhBTTZONDN1VEduUlludjU2R1RMMXhLMGttaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDU2NzM3ODgxOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlZiaFlxTm81VnJqL3puMTRscnFhMUtuY3NtMW5KdHJ0WlNNMTRYNDMwdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDM3ODkxMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOSEMifQ=="
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
