const { MessageType, GroupSettingChange, ChatModification, WAConnectionTest } = require('@adiwajshing/baileys');
const Silver = require('../events');
const Config = require('../config');
var CLEAR_DESC = ''
if (Config.LANG == 'SI') {
 CLEAR_DESC = '????? ?? ???????? ?????? ?????? ???? ????'
 }
 if (Config.LANG == 'EN') {
CLEAR_DESC = 'Clears all the messages in the commanded group'
}

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Silver.addCommand({ pattern: 'clear', fromMe: true, desc: CLEAR_DESC, dontAddCommandList: false, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage('```cleaning chat... ?```');
    await message.client.modifyChat(message.jid, ChatModification.delete);
    await message.sendMessage('```Chat cleared ?```');
}));
