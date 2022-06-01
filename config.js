/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './silverbot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: '🪩 Silver 1.0',
    CHANNEL: 'https://t.me/',
    SESSION: process.env.SILVER_SESSION === undefined ? '' : process.env.SILVER_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    NOLINK_GROUP: process.env.NOLINK_GROUP=== undefined ? 'false': process.env.NOLINK_GROUP,
    ANTIBAD_WORDS: process.env.ANTIBAD_WORDS === undefined ? 'false' : process.env.ANTIBAD_WORDS,
    ANTIGROUP: process.env.ANTIGRP_LINK === undefined ? 'false' : process.env.ANTIGRP_LINK,
    VOICEEVA: process.env.VOICE_EVA === undefined ? 'false' : process.env.VOICE_EVA,
    CHATBOT: process.env.CHATBOT === undefined ? 'false' : process.env.CHATBOT,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    CAP_BIO: process.env.CAP_BIO === undefined ? '© కỉꪶꪜꫀꪹ ꪉꪮᡶ ²⁰²²' : process.env.CAP_BIO,
    CAPTION: process.env.CAPTION === undefined ? '© కỉꪶꪜꫀꪹ ꪉꪮᡶ  ²⁰²²' : process.env.CAPTION,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.ibb.co/nRtBDQj/alivelogotest.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ? 'false' : process.env.INBOX_BLOCK,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/nRtBDQj/alivelogotest.jpg' : process.env.ALIVE_LOGO,
    ALIVE_CMD: process.env.ALIVE_CMD === undefined ? 'alive' : process.env.ALIVE_CMD,
    CUS_PANEL: process.env.CUS_PANEL === undefined ? 'menu' : process.env.CUS_PANEL,
    BOT_OWNER: process.env.DEPLOYER === undefined ? 'Your name' : process.env.BOT_OWNER,
    DETAILS: process.env.DETAILS === undefined ? 'true' : process.env.DETAILS, 
    C_EMOJI: process.env.C_EMOJI === undefined ? '🌐' : process.env.C_EMOJI,
    D_EMOJI: process.env.D_EMOJI === undefined ? '⚓' : process.env.D_EMOJI,
    BOT_NAME: process.env.BOT_NAME === undefined ? 'Silver Bot' : process.env.BOT_NAME,
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? 'https://telegra.ph/file/dad5ef6acdf755b35bda1.mp4' : process.env.WELCOME_GIF,
    LOGO_WELCOME: process.env.LOGO_WELCOME === undefined ? 'https://telegra.ph/file/dad5ef6acdf755b35bda1.mp4' : process.env.LOGO_WELCOME,
    LOGO_BYE: process.env.LOGO_BYE === undefined ? 'https://telegra.ph/file/5850ee81491205afc2140.mp4' : process.env.LOGO_BYE,
    VERIFYING_YOUR_USER_BOT_PLEASE_WAIT: process.env.VERIFYING_YOUR_USER_BOT_PLEASE_WAIT === undefined ? 'afterverification' : process.env.VERIFYING_YOUR_USER_BOT_PLEASE_WAIT,
    FAKE_NUM: process.env.FAKE_NUM === undefined ? 'true' : process.env.FAKE_NUM,
    BYE_GIF: process.env.BYE_GIF === undefined ? 'https://telegra.ph/file/5850ee81491205afc2140.mp4' : process.env.BYE_GIF,
    XTEAM_API: process.env.XTEAM_API === undefined ? 'c449b3bbc66d2281c167b77b99f07ef7' : process.env.XTEAM_API,
    GREETING_BG: process.env.GREETING_BG === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GREETING_BG,    
    SONG_DOWN: process.env.SONG_DOWN === undefined ? '*ඔබේ ගීතය Download කරමින් පවතී...*' : process.env.SONG_DOWN,
    SONG_UP: process.env.SONG_UP === undefined ? '*ඔබේ ගීතය Upload කරමින් පවතී...*' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '*ඔබේ වීඩියෝව Download කරමින් පවතී...*' : process.env.VIDEO_DOWN,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? '*ඔබේ වීඩියෝව Upload කරමින් පවතී...*' : process.env.VIDEO_UP,
    CAPTION_MSG: process.env.CAPTION_MSG === undefined ? 'copyright (c) 2021 cobrabot' : process.env.CAPTION_MSG,
    CMDP_MSG: process.env.CMDP_MSG === undefined ? 'default' : process.env.CMDP_MSG,
    CMDP_STICK: process.env.CMDP_STICK === undefined ? '✪/⌨️' : process.env.CMDP_STICK,
    LOGOPK_IMG: process.env.LOGOPK_IMG === undefined ? 'https://telegra.ph/file/a1b5345cf2bb012740646.jpg' : process.env.LOGOPK_IMG,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    GREETING_TYPE: process.env.GREETING_TYPE === undefined ? 'IMG' : process.env.GREETING_TYPE,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    IMGBB: process.env.IMGBB === undefined ? false : process.env.IMGBB,
    STIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.STIME_ZONE,
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './silverbot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "120363042229973049",
    SUPPORT2: "",
    SUPPORT3: "",
    Support4: "",
    AMDI_1: "",
    AMDI_2: "",
    AMDI_3: "",
    AMDI_4: "",
    AMDI_5: "",
    AMDI_6: "",
    AMDI_7: "",
    OWN: "94715166712,0"
};
