const Silver = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

const Ln = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');
const code = ('*🌐 ඉහලට යාමෙන් වළකින්න !!!*\n *🌐 Don\'t go up !!!*\nA\nɴ\nᴛ\nɪ\ns\nᴘ\nᴀ\nᴍ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*[⚓]─⦁ 𝚂𝙸𝙻𝚅𝙴𝚁 𝙱𝙾𝚃 ⦁─[⚓]*')
const FINAL = "THIS IS AN ANTISAPM (anti lag),\nමෙම කේතය ඔබගේ දුරකථනය විකුර්ති පණිවිඩ නිසා සිරවිම වලකාලයි"
const TMUTE = "*✾⦁═══════════════⦁✾*\n    [⚓]─⦁ 𝚂𝙸𝙻𝚅𝙴𝚁 𝙱𝙾𝚃 ⦁─[⚓]\n*✾⦁═══════════════⦁✾*"
const MUT = ".mute 3h"
const SCXR = "⌛ 𝙎𝙥𝙖𝙢 𝙠𝙞𝙡𝙡𝙚𝙧 𝙧𝙪𝙣𝙞𝙣𝙜..."



         Silver.addCommand({pattern: 'antispm', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {

  var msg = await message.reply('⌛ 𝙎𝙥𝙖𝙢 𝙠𝙞𝙡𝙡𝙚𝙧 𝙧𝙪𝙣𝙞𝙣𝙜...');

  await message.client.sendMessage(
    message.jid,TMUTE, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCXR, MessageType.text);

        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    await message.client.sendMessage(
        message.jid,code, MessageType.text);

        await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                               await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                          await message.client.sendMessage(
                             message.jid,FINAL, MessageType.text);
            let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '❗⛔ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,'*⛔═══An emergency═══⛔*\n\n' + mesaj+'\n\n``` 😈 Silver Bot Antispam ```', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
   
                             

  }));
