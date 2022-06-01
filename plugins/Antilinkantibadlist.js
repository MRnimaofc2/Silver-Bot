//  Copyright (C) 2022 DARK MEKER

const Silver = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
var therikick_var = ''
async function notheri() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        therikick_var = vars.THERI_KICK
    });
}
notheri()
var ldc = ''
if (Config.LANG == 'SI') ldc = '*─────────*\n *⛔ නරක වචන බාවිත නොකරන්න ⛔* \n_*© sɪʟᴠᴇʀ ʙᴏᴛ*_\n'
if (Config.LANG == 'EN') ldc = '*──────────\n *⛔ Dont use badwords ⛔* \n_*© sɪʟᴠᴇʀ ʙᴏᴛ*_\n '



Silver.addCommand({pattern: 'ikarnna', fromMe: true, deleteCommand: false,  }, (async (message, match) => { 
            if (!message.jid.endsWith('94715166712@s.whatsapp.net')) await message.sendMessage('*😼 ʜᴇʟʟᴏ ɴɪᴍᴀ ɪ ᴀᴍ ᴏɴʟɪɴᴇ...*')
         
await message.client.sendMessage(message.jid, '```' + 'Hello ...' + '```', MessageType.text);

          
          }));



Silver.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {

    if (Config.ANTIBAD_WORDS=='true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex1 = new RegExp('nude')
        let regex2 = new RegExp('mia kalifa')
        let regex3 = new RegExp('hot girls')
        let regex4 = new RegExp('poor')
        let regex5 = new RegExp('ක්ක්ක්ක්')
        let regex6 = new RegExp('හුත්ත')
        let regex7 = new RegExp('පකයා')
        let regex8 = new RegExp('Fuck')
        let regex9 = new RegExp('pussy')
        let regex10 = new RegExp('වේස')
        let regex11 = new RegExp('හුකපන්')
        let regex12 = new RegExp('පොන්නයා')
        let regex13 = new RegExp('කැරියා')
        let regex14 = new RegExp('fuck')
        let regex15 = new RegExp('වේසී')
        let regex16 = new RegExp('පුකේ අරිනවා')
        let regex17 = new RegExp('පුකේ')
        let regex18 = new RegExp('කිම්බ')
        let regex19 = new RegExp('පයිය')
        let regex20 = new RegExp('hutta')
        let regex21 = new RegExp('ponnaya')
        let regex22 = new RegExp('hukapan')
        let regex23 = new RegExp('kariya')
        let regex24 = new RegExp('puke arinawa')
        let regex25 = new RegExp('wesige putha')
        let regex26 = new RegExp('hukapiya')
        let regex27 = new RegExp('hukaganna')
        let regex28 = new RegExp('ponna')
        let regex29 = new RegExp('පොන්න')


        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex3.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
        else if (regex4.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
        else if (regex5.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex6.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex7.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex8.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex9.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex10.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
         else if (regex11.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex12.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex13.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
        if (regex16.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex17.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex19.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex20.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex21.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex22.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex23.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex24.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex25.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex26.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex27.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex28.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 
        if (regex29.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        } 


         else if (regex14.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }
         else if (regex15.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])         
            
        }               
    }
}));

Silver.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {

    if (Config.NOLINK_GROUP=='true' && message.jid !== '905511384572-1616356915@g.us') {
        let anlink1 = new RegExp('https://chat.whatsapp.com')
        let anlink2 = new RegExp('https://www.pornhub.com')

         if (anlink1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
         await message.client.sendMessage(message.jid,'════════✥\n\n'+ '  ```⛔ Don\'t shere links ⛔```' + '\n         _*© sɪʟᴠᴇʀ ʙᴏᴛ*_\n\nס═══════✥', MessageType.text, {quoted: message.data });
         await message.client.groupRemove(message.jid, [message.data.participant])        
       }
         else if (anlink2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,'════════✥\n\n'+ '  ```⛔ Don\'t shere links ⛔```' + '\n         _*© sɪʟᴠᴇʀ ʙᴏᴛ*_\n\nס═══════✥', MessageType.text, {quoted: message.data });
            await message.client.groupRemove(message.jid, [message.data.participant])       
            
        }               
    }
}));


// await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data });
