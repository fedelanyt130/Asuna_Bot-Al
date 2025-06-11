import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path';
import ws from 'ws';

let handler = async (m, { conn: _envio, command, usedPrefix, args, text, isOwner }) => {
  const isCommand1 = /^(deletesesion|deletebot|deletesession)$/i.test(command);
  const isCommand2 = /^(stop|pausarai|pausarbot)$/i.test(command);
  const isCommand3 = /^(bots|sockets|socket)$/i.test(command);

  async function reportError(e) {
    await m.reply(`(｡•́︿•̀｡) Ocurrió un error inesperado.`);
    console.log(e);
  }

  switch (true) {
    case isCommand1: {
      let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      let uniqid = `${who.split`@`[0]}`;
      const dir = `./${jadi}/${uniqid}`;

      if (!fs.existsSync(dir)) {
        await _envio.sendMessage(m.chat, {
          text: `(⁎˃ᆺ˂) Usted no tiene una sesión.\n\nCree una con:\n*${usedPrefix + command}*\n\nO use su ID directamente:\n*${usedPrefix + command}* \`(ID)\``,
        }, { quoted: m });
        return;
      }

      if (global.conn.user.jid !== conn.user.jid) {
        return _envio.sendMessage(m.chat, {
          text: `⚠️ Este comando solo puede ser usado desde el *Bot principal*.\n\nContacta: https://wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`,
        }, { quoted: m });
      }

      await _envio.sendMessage(m.chat, {
        text: `☁️ Tu sesión como *Sub-Bot* se está eliminando...`,
      }, { quoted: m });

      try {
        fs.rmSync(dir, { recursive: true, force: true });
        await _envio.sendMessage(m.chat, {
          text: `✔️ Sesión eliminada correctamente.`,
        }, { quoted: m });
      } catch (e) {
        reportError(e);
      }
      break;
    }

    case isCommand2: {
      if (global.conn.user.jid == conn.user.jid) {
        await _envio.reply(m.chat, `⚠️ Este comando es solo para *Sub-Bots*.\n\nContacta al *Bot principal* si deseas ser uno.`, m);
      } else {
        await _envio.reply(m.chat, `✦ ${botname} ha sido *desactivado temporalmente*.`, m);
        _envio.ws.close();
      }
      break;
    }

    case isCommand3: {
      const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws && conn.ws.readyState !== ws.CLOSED)])];

      function convertirMs(ms) {
        let segundos = Math.floor(ms / 1000) % 60;
        let minutos = Math.floor(ms / 60000) % 60;
        let horas = Math.floor(ms / 3600000) % 24;
        let días = Math.floor(ms / 86400000);
        return [
          días ? `${días} días` : '',
          horas ? `${horas} horas` : '',
          minutos ? `${minutos} minutos` : '',
          segundos ? `${segundos} segundos` : ''
        ].filter(Boolean).join(', ');
      }

      const message = users.map((v, index) =>
        `✧･ﾟ「 ${index + 1} 」･ﾟ✧
📎 https://wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado
*🫦 Usuario:* ${v.user.name || 'Sub-Bot'}
*☔ Conectado hace:* ${v.uptime ? convertirMs(Date.now() - v.uptime) : 'Desconocido'}`
      ).join('\n\n｡･:*:･ﾟ★,｡･:*:･ﾟ☆\n\n');

      const replyMessage = message.length === 0
        ? `(｡•́︿•̀｡) No hay Sub-Bots disponibles por ahora.` 
        : message;

      const totalUsers = users.length;

      const responseMessage =
`*╭─ ⋞⟡⋟───❀──⋞⟡⋟─╮*
   ୨୧ ʟɪsᴛᴀ ᴅᴇ Sᴜʙ-Bᴏᴛs
*╰─ ⋞⟡⋟───────────╯*

╭⊹˚₊✦ Puedes pedir permiso para que uno se una a tu grupo.

┈┈┈┈┈┈┈┈┈┈┈┈
*「 ᴀᴠɪsᴏ 」*
Cada Sub-Bot es independiente.
El Bot principal no se responsabiliza de su uso.

*✦ Sub-Bots conectados:* ${totalUsers || '0'}
┈┈┈┈┈┈┈┈┈┈┈┈

${replyMessage}

╰─⌗ ASUNA - BOT ⌗─╯`;

      await _envio.sendMessage(m.chat, {
        text: responseMessage,
        mentions: _envio.parseMention(responseMessage)
      }, { quoted: m });
      break;
    }
  }
};

handler.tags = ['serbot'];
handler.help = ['sockets', 'deletesesion', 'pausarai'];
handler.command = ['deletesesion', 'deletebot', 'deletesession', 'stop', 'pausarai', 'pausarbot', 'bots', 'sockets', 'socket'];

export default handler;
