let handler = async (m, { conn, command, usedPrefix }) => {
let img = 'https://files.catbox.moe/iigsua.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ 𝖿ᥱძᥱᥣᥲᥒᥡ𝗍
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/fedelanyt130
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
