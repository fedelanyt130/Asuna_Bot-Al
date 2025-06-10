let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let user = global.db.data.users[userId];
  let name = conn.getName(userId);
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(global.db.data.users).length;
  let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;

  const botname = global.botname || "NombreDelBot";
  const textbot = global.textbot || "Descripción del bot";
  const banner = global.banner || "URL de la imagen del banner";
  const redes = global.redes || "URL de las redes sociales";
  const channelRD = global.channelRD || { id: 'id_del_canal', name: 'Nombre del canal' };
  const moneda = global.moneda || 'monedas';

  let txt = `
  *🍭.......⋆｡˚☁︎｡⋆｡ 🍀 ⋆｡˚☁︎｡⋆........🍭*
> *Hola,* ${saludo} *Me llamo* ${botname}

> *🍭 EL BOT SE ENCUENTRA EN DESARROLLO XD*

👤 *Usuario:* @${userId.split('@')[0]}
🪷 *Modo:* Privado
🕒 *Activa hace:* ${uptime}
👥 *Usuarios:* *${totalreg}*
🤍 *Comandos:* ${totalCommands}
🍫 *Baileys:* MekBaileys

> ･::ﾟ･ﾟ☆ 𝐈𝐧𝐟𝐨 𝐁𝐨𝐭 ☆･ﾟ:･ﾟ::･> 

*꒰ 👑 ꒱* #help • #menu
*꒰ 👑 ꒱* #menu18 #menunsfw
*꒰ 👑 ꒱* #uptime • #runtime
*꒰ 👑 ꒱* #serbot • #serbot code
*꒰ 👑 ꒱* #bots • #sockets
*꒰ 👑 ꒱* #creador • #owner
*꒰ 👑 ꒱* #status • #estado
*꒰ 👑 ꒱* #links • #grupos
*꒰ 👑 ꒱* #infobot • #infobot
*꒰ 👑 ꒱* #sug • #newcommand
*꒰ 👑 ꒱* #p • #ping
*꒰ 👑 ꒱* #reporte • #reportar
*꒰ 👑 ꒱* #sistema • #system
*꒰ 👑 ꒱* #speed • #speedtest
*꒰ 👑 ꒱* #views • #usuarios
*꒰ 👑 ꒱* #funciones • #totalfunciones
*꒰ 👑 ꒱* #ds • #fixmsgespera
*꒰ 👑 ꒱* #editautoresponder


> ･::::･ﾟ☆ 𝐁𝐮𝐬𝐜𝐚𝐝𝐨𝐫𝐞𝐬 ☆･ﾟ★･ﾟ::･> 

*꒰ 🔍 ꒱* #wallpapersearch + [ búsqueda ]
*꒰ 🔍 ꒱* #tiktoksearch • #tiktoks
*꒰ 🔍 ꒱* #tweetposts
*꒰ 🔍 ꒱* #ytsearch • #yts
*꒰ 🔍 ꒱* #githubsearch
*꒰ 🔍 ꒱* #cuevana • #cuevanasearch
*꒰ 🔍 ꒱* #google
*꒰ 🔍 ꒱* #pin • #pinterest
*꒰ 🔍 ꒱* #imagen • #image
*꒰ 🔍 ꒱* #infoanime
*꒰ 🔍 ꒱* #hentaisearch • #searchhentai
*꒰ 🔍 ꒱* #xnxxsearch • #xnxxs
*꒰ 🔍 ꒱* #xvsearch • #xvideossearch
*꒰ 🔍 ꒱* #pornhubsearch • #phsearch
*꒰ 🔍 ꒱* #npmjs

> ･::･ﾟ☆ 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬 ☆･ﾟ:,★ﾟ::･> 

*꒰ 📥 ꒱* #ttstalk • #tiktokstalk + [username]
*꒰ 📥 ꒱* #tiktok • #tt
*꒰ 📥 ꒱* #mediafire • #mf
*꒰ 📥 ꒱* #pinvid • #pinvideo + [enlacé]
*꒰ 📥 ꒱* #mega • #mg + [enlacé]
*꒰ 📥 ꒱* #play • #play2
*꒰ 📥 ꒱* #ytmp3 • #ytmp4
*꒰ 📥 ꒱* #fb • #facebook
*꒰ 📥 ꒱* #twitter • #x + [Link]
*꒰ 📥 ꒱* #ig • #instagram
*꒰ 📥 ꒱* #tts • #tiktoks + [busqueda]
*꒰ 📥 ꒱* #terabox • #tb + [enlace]
*꒰ 📥 ꒱* #ttimg • #ttmp3 + <url
*꒰ 📥 ꒱* #gitclone + <url
*꒰ 📥 ꒱* #xvideosdl
*꒰ 📥 ꒱* #xnxxdl
*꒰ 📥 ꒱* #apk • #modapk
*꒰ 📥 ꒱* #tiktokrandom • #ttrandom
*꒰ 📥 ꒱* #npmdl • #npmdownloader

> ･:,:ﾟ☆ 𝐄𝐜𝐨𝐧𝐨𝐦𝐢́𝐚 ☆･ﾟ:::･> 

*꒰ 💰 ꒱* #w • #work • #trabajar ${moneda}
*꒰ 💰 ꒱* #slut • #protituirse ${moneda}
*꒰ 💰 ꒱* #cf • #suerte ${moneda}
*꒰ 💰 ꒱* #crime • #crimen ${moneda}
*꒰ 💰 ꒱* #ruleta • #roulette • #rt ${moneda}
*꒰ 💰 ꒱* #casino • #apostar ${moneda}
*꒰ 💰 ꒱* #slot ${moneda}
*꒰ 💰 ꒱* #cartera • #wallet ${moneda}
*꒰ 💰 ꒱* #banco • #bank ${moneda}
*꒰ 💰 ꒱* #deposit • #depositar • #d ${moneda}
*꒰ 💰 ꒱* #with • #retirar • #withdraw ${moneda}
*꒰ 💰 ꒱* #transfer • #pay ${moneda}
*꒰ 💰 ꒱* #miming • #minar • #mine
*꒰ 💰 ꒱* #buyall • #buy ${moneda}
*꒰ 💰 ꒱* #daily • #diario
*꒰ 💰 ꒱* #cofre
*꒰ 💰 ꒱* #weekly • #semanal
*꒰ 💰 ꒱* #monthly • #mensual
*꒰ 💰 ꒱* #steal • #robar • #rob ${moneda}.
*꒰ 💰 ꒱* #robarxp • #robxp
*꒰ 💰 ꒱* #eboard • #baltop ${moneda}
*꒰ 💰 ꒱* #aventura • #adventure
*꒰ 💰 ꒱* #curar • #heal
*꒰ 💰 ꒱* #cazar • #hunt • #berburu
*꒰ 💰 ꒱* #inv • #inventario
*꒰ 💰 ꒱* #mazmorra • #explorar ${moneda}
*꒰ 💰 ꒱* #halloween
*꒰ 💰 ꒱* #christmas • #navidad

> ･ﾟ★,> ☆ 𝐆𝐚𝐜𝐡𝐚 ☆,★::･> 

*꒰ 🎲 ꒱* #rollwaifu • #rw • #roll
*꒰ 🎲 ꒱* #claim • #c • #reclamar
*꒰ 🎲 ꒱* #harem • #waifus • #claims
*꒰ 🎲 ꒱* #charimage • #waifuimage • #wimage
*꒰ 🎲 ꒱* #charinfo • #winfo • #waifuinfo
*꒰ 🎲 ꒱* #givechar • #givewaifu • #regalar
*꒰ 🎲 ꒱* #vote • #votar
*꒰ 🎲 ꒱* #waifusboard • #waifustop • #topwaifus

> ･ﾟ★,･ﾟ☆ 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 ☆･ﾟ･> ,★･ﾟ･> 

*꒰ ✨ ꒱* #sticker • #s
*꒰ ✨ ꒱* #setmeta
*꒰ ✨ ꒱* #delmeta
*꒰ ✨ ꒱* #pfp • #getpic
*꒰ ✨ ꒱* #qc
*꒰ ✨ ꒱* #toimg • #img
*꒰ ✨ ꒱* #brat • #ttp • #attp
*꒰ ✨ ꒱* #emojimix 🦋+🔥
*꒰ ✨ ꒱* #wm

> ･:★,> ･ﾟ☆ 𝐇𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬 ☆･ﾟ:★･ﾟ･> 

*꒰ 🛠️ ꒱* #calcular • #calcular • #cal
*꒰ 🛠️ ꒱* #tiempo • #clima
*꒰ 🛠️ ꒱* #horario
*꒰ 🛠️ ꒱* #fake • #fakereply
*꒰ 🛠️ ꒱* #enhance • #remini • #hd
*꒰ 🛠️ ꒱* #letra
*꒰ 🛠️ ꒱* #read • #readviewonce • #ver
*꒰ 🛠️ ꒱* #whatmusic • #shazam
*꒰ 🛠️ ꒱* #ss • #ssweb
*꒰ 🛠️ ꒱* #length • #tamaño
*꒰ 🛠️ ꒱* #say • #decir + [texto]
*꒰ 🛠️ ꒱* #todoc • #toducument
*꒰ 🛠️ ꒱* #translate • #traducir • #trad

> ･:･:･ﾟ☆ 𝐏𝐞𝐫𝐟𝐢𝐥 ☆･ﾟ::::･> 

*꒰ 👤 ꒱* #reg • #verificar • #register
*꒰ 👤 ꒱* #unreg
*꒰ 👤 ꒱* #profile
*꒰ 👤 ꒱* #marry [mension / etiquetar]
*꒰ 👤 ꒱* #divorce
*꒰ 👤 ꒱* #setgenre • #setgenero
*꒰ 👤 ꒱* #delgenre • #delgenero
*꒰ 👤 ꒱* #setbirth • #setnacimiento
*꒰ 👤 ꒱* #delbirth • #delnacimiento
*꒰ 👤 ꒱* #setdescription • #setdesc
*꒰ 👤 ꒱* #deldescription • #deldesc
*꒰ 👤 ꒱* #lb • #lboard + <Paginá
*꒰ 👤 ꒱* #level • #lvl + <@Mencion
*꒰ 👤 ꒱* #comprarpremium • #premium
*꒰ 👤 ꒱* #confesiones • #confesar

> ･::･ﾟ☆ 𝐆𝐫𝐮𝐩𝐨𝐬 ☆･ﾟ::ﾟ::･> 
Comandos de grupos para una mejor gestión de ellos.
*꒰ 👥 ꒱* #hidetag
» Envía un mensaje mencionando a todos los usuarios
*꒰ 👥 ꒱* #gp • #infogrupo
» Ver la Información del grupo.
*꒰ 👥 ꒱* #linea • #listonline
» Ver la lista de los usuarios en línea.
*꒰ 👥 ꒱* #link
» El bot envía el link del grupo.
*꒰ 👥 ꒱* admins • admin
» Mencionar a los admins para solicitar ayuda.
*꒰ 👥 ꒱* #restablecer • #revoke
» Restablecer el enlace del grupo.
*꒰ 👥 ꒱* #grupo • #group [open / abrir]
» Cambia ajustes del grupo para que todos los usuarios envíen mensaje.
*꒰ 👥 ꒱* #grupo • #gruop [close / cerrar]
» Cambia ajustes del grupo para que solo los administradores envíen mensaje.
*꒰ 👥 ꒱* #kick [número / mension]
» Elimina un usuario de un grupo.
*꒰ 👥 ꒱* #add • #añadir • #agregar [número]
» Invita a un usuario a tu grupo.
*꒰ 👥 ꒱* #promote [mension / etiquetar]
» El bot dará administrador al usuario mencionando.
*꒰ 👥 ꒱* #demote [mension / etiquetar]
» El bot quitará administrador al usuario mencionando.
*꒰ 👥 ꒱* #gpbanner • #groupimg
» Cambiar la imagen del grupo.
*꒰ 👥 ꒱* #gpname • #groupname
» Cambiar el nombre del grupo.
*꒰ 👥 ꒱* #gpdesc • #groupdesc
» Cambiar la descripción del grupo.
*꒰ 👥 ꒱* #advertir • #warn • #warning
» Darle una advertencia a un usuario.
*꒰ 👥 ꒱* #unwarn • #delwarn
» Quitar advertencias.
*꒰ 👥 ꒱* #advlist • #listadv
» Ver lista de usuarios advertidos.
*꒰ 👥 ꒱* #bot on
» Enciende el bot en un grupo.
*꒰ 👥 ꒱* #bot off
» Apaga el bot en un grupo.
*꒰ 👥 ꒱* #mute [mension / etiquetar]
» El bot elimina los mensajes del usuario.
*꒰ 👥 ꒱* #unmute [mension / etiquetar]
» El bot deja de eliminar los mensajes del usuario.
*꒰ 👥 ꒱* #encuesta • #poll
» Crea una encuesta.
*꒰ 👥 ꒱* #delete • #del
» Elimina mensaje de otros usuarios.
*꒰ 👥 ꒱* #fantasmas
» Ver lista de inactivos del grupo.
*꒰ 👥 ꒱* #kickfantasmas
» Elimina a los inactivos del grupo.
*꒰ 👥 ꒱* #invocar • #tagall • #todos
» Invoca a todos los usuarios de un grupo.
*꒰ 👥 ꒱* #setemoji • #setemo
» Cambia el emoji que se usa en la invitación de usuarios.
*꒰ 👥 ꒱* #listnum • #kicknum
» Elimina a usuario por el prefijo de país.

> ･::･ﾟ☆ 𝐀𝐧𝐢𝐦𝐞 ☆･ﾟ::･> 
Comandos de reacciones de anime, ¡tan tiernas!
*꒰ 🌸 ꒱* #angry • #enojado + <mencion
» Estar enojado
*꒰ 🌸 ꒱* #bite + <mencion
» Muerde a alguien
*꒰ 🌸 ꒱* #bleh + <mencion
» Sacar la lengua
*꒰ 🌸 ꒱* #blush + <mencion
» Sonrojarte
*꒰ 🌸 ꒱* #bored • #aburrido + <mencion
» Estar aburrido
*꒰ 🌸 ꒱* #cry + <mencion
» Llorar por algo o alguien
*꒰ 🌸 ꒱* #cuddle + <mencion
» Acurrucarse
*꒰ 🌸 ꒱* #dance + <mencion
» Sácate los pasitos prohibidos
*꒰ 🌸 ꒱* #drunk + <mencion
» Estar borracho
*꒰ 🌸 ꒱* #eat • #comer + <mencion
» Comer algo delicioso
*꒰ 🌸 ꒱* #facepalm + <mencion
» Darte una palmada en la cara
*꒰ 🌸 ꒱* #happy • #feliz + <mencion
» Salta de felicidad
*꒰ 🌸 ꒱* #hug + <mencion
» Dar un abrazo
*꒰ 🌸 ꒱* #impregnate • #preg + <mencion
» Embarazar a alguien
*꒰ 🌸 ꒱* #kill + <mencion
» Toma tu arma y mata a alguien
*꒰ 🌸 ꒱* #kiss • #besar • #kiss2 + <mencion
» Dar un beso
*꒰ 🌸 ꒱* #laugh + <mencion
» Reírte de algo o alguien
*꒰ 🌸 ꒱* #lick + <mencion
» Lamer a alguien
*꒰ 🌸 ꒱* #love • #amor + <mencion
» Sentirse enamorado
*꒰ 🌸 ꒱* #pat + <mencion
» Acaricia a alguien
*꒰ 🌸 ꒱* #poke + <mencion
» Picar a alguien
*꒰ 🌸 ꒱* #pout + <mencion
» Hacer pucheros
*꒰ 🌸 ꒱* #punch + <mencion
» Dar un puñetazo
*꒰ 🌸 ꒱* #run + <mencion
» Correr
*꒰ 🌸 ꒱* #sad • #triste + <mencion
» Expresar tristeza
*꒰ 🌸 ꒱* #scared + <mencion
» Estar asustado
*꒰ 🌸 ꒱* #seduce + <mencion
» Seducir a alguien
*꒰ 🌸 ꒱* #shy • #timido + <mencion
» Sentir timidez
*꒰ 🌸 ꒱* #slap + <mencion
» Dar una bofetada
*꒰ 🌸 ꒱* #dias • #days
» Darle los buenos días a alguien
*꒰ 🌸 ꒱* #noches • #nights
» Darle las buenas noches a alguien
*꒰ 🌸 ꒱* #sleep + <mencion
» Tumbarte a dormir
*꒰ 🌸 ꒱* #smoke + <mencion
» Fumar
*꒰ 🌸 ꒱* #think + <mencion
» Pensar en algo


> ･:･:･ﾟ☆ 🎮 𝐉𝐮𝐞𝐠𝐨𝐬 🎮 ☆･ﾟ･ﾟ::･> 

Comandos de juegos para jugar con tus amigos, ¡a divertirse!
*꒰ 🎲 ꒱* #amistad • #amigorandom
» Hacer amigos con un juego.
*꒰ 🎲 ꒱* #chaqueta • #jalamela
» Hacerte una chaqueta.
*꒰ 🎲 ꒱* #chiste
» La bot te cuenta un chiste.
*꒰ 🎲 ꒱* #consejo
» La bot te da un consejo.
*꒰ 🎲 ꒱* #doxeo • #doxear + <mencion
» Simular un doxeo falso.
*꒰ 🎲 ꒱* #facto
» La bot te lanza un facto.
*꒰ 🎲 ꒱* #formarpareja
» Forma una pareja.
*꒰ 🎲 ꒱* #formarpareja5
» Forma 5 parejas diferentes.
*꒰ 🎲 ꒱* #frase
» La bot te da una frase.
*꒰ 🎲 ꒱* #huevo
» Agárrale el huevo a alguien.
*꒰ 🎲 ꒱* #chupalo + <mencion
» Hacer que un usuario te la chupe.
*꒰ 🎲 ꒱* #aplauso + <mencion
» Aplaudirle a alguien.
*꒰ 🎲 ꒱* #marron + <mencion
» Burlarte del color de piel de un usuario.
*꒰ 🎲 ꒱* #suicidar
» Suicídate.
*꒰ 🎲 🎲 ꒱* #iq • #iqtest + <mencion
» Calcular el iq de alguna persona.
*꒰ 🎲 ꒱* #meme
» La bot te envía un meme aleatorio.
*꒰ 🎲 ꒱* #morse
» Convierte un texto a código morse.
*꒰ 🎲 ꒱* #nombreninja
» Busca un nombre ninja aleatorio.
*꒰ 🎲 ꒱* #paja • #pajeame
» La bot te hace una paja.
*꒰ 🎲 ꒱* #personalidad + <mencion
» La bot busca tu personalidad.
*꒰ 🎲 ꒱* #piropo
» Lanza un piropo.
*꒰ 🎲 ꒱* #pregunta
» Hazle una pregunta a la bot.
*꒰ 🎲 ꒱* #ship • #pareja
» La bot te da la probabilidad de enamorarte de una persona.
*꒰ 🎲 ꒱* #sorteo
» Empieza un sorteo.
*꒰ 🎲 ꒱* #top
» Empieza un top de personas.
*꒰ 🎲 ꒱* #formartrio + <mencion
» Forma un trío.
*꒰ 🎲 ꒱* #ahorcado
» Diviértete con la bot jugando el juego ahorcado.
*꒰ 🎲 ꒱* #mates • #matematicas
» Responde las preguntas de matemáticas para ganar recompensas.
*꒰ 🎲 ꒱* #ppt
» Juega piedra papel o tijeras con la bot.
*꒰ 🎲 ꒱* #sopa • #buscarpalabra
» Juega el famoso juego de sopa de letras.
*꒰ 🎲 ꒱* #pvp • #suit + <mencion
» Juega un pvp contra otro usuario.
*꒰ 🎲 ꒱* #ttt
» Crea una sala de juego.

> ${dev}`.trim();

  await conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1,
      },
      forwardingScore: 99999999,
      externalAdReply: {
        title: botname,
        body: wm,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menutest', 'menu', 'help'];

export default handler;

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours} Horas ${minutes} Minutos ${seconds} Segundos`;
}
