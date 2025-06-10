import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad.....*

- ${namegrupo}
> *☔* ${gp1}

${namecomu}
> *☔* ${comunidad1}

*ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ*

💙 Enlace anulado? entre aquí! 

- ${namechannel}
> *☔* ${channel}

> ${dev}`

await m.react(emojis)
  
<img src= "https://files.catbox.moe/iigsua.jpg">
    </p>
}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
