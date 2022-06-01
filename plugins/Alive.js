const Silver = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let wk = Config.WORKTYPE == 'public' ? false : true
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })

const Language = require('../language');
const Lang = Language.getString('system_stats');
var time = new Date().toLocaleString('HI', { timeZone: Config.STIME_ZONE }).split(' ')[1]

    
  Silver.addCommand({pattern: 'alive', fromMe: wk, desc: Lang.ALIVE_DESC, deleteCommand: false }, (async (message, match) => {
            var wish = ''
if (hrs < 12) wish = ' *ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅* '
if (hrs >= 12 && hrs <= 17) wish = ' *ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞* '
if (hrs >= 17 && hrs <= 19) wish = ' *ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌇* '
if (hrs >= 19 && hrs <= 24) wish = ' *ɢᴏᴏᴅ ɴɪɢʜᴛ 🪐* '
var nima = '╭────────────────────╮\n├─ *⚓ 𝚂𝙸𝙻𝚅𝙴𝚁 𝙱𝙾𝚃 ⚓*\n├─  ⌚ 𝚃𝙸𝙼𝙴 :'+time+'\n├─  🔩 𝙷𝙰𝙽𝙳𝙻𝙴𝚁𝚂 : '+'*'+Config.HANDLERS+'*'+'\n├─  '+wish+' \n*╰─────────────────────────⦁[⚓]*'


        
    if (Config.ALIVEMSG == 'default') {
            
        var aliveimg = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (aliveimg.data), MessageType.image, {mimetype: Mimetype.png, caption: nima+'\n\n*║👋Hey, I\'m online now...*\n\n║ ```Type``` ' + '*.menu*' + ' ```to get command list```\n\n║ _Version_: ```'  + Config. VERSION + '```\n\n*╰────────────❋*',quoted: message.data })

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: nima+'\n\n'+Config.ALIVEMSG + '\n',quoted: message.data })
     }
    }));

    Silver.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, deleteCommand: false }, (async (message, match) => {

        if (message.jid === '120363042897065108@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

