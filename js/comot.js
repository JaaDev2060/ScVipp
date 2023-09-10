require('../config/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const cheerio = require("cheerio");
const chalk = require("chalk");
const crypto = require("crypto");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const moment = require("moment-timezone");
const { uptotelegra } = require(`./lib/upload`)
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./lib/functions')

module.exports = comot = async (comot, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const { color, bgcolor, pickRandom, randomNomor } = require('./lib/console.js')
const { wallpaper, wikimedia, quotesAnime, komiku, ssweb, sholat, tafsirsurah, fbdl } = require("./lib/search");
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi) : '🍋'
//`
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '🍋').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await comot.decodeJid(comot.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));

const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await comot.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntiLink = antilink.includes(from) ? true : false
const petik = "```"
global.v = '𝗖𝗢𝗠𝗢𝗧 𝗠𝗗'
const reply = (teks) => {
return comot.sendMessage(from, { text: teks, contextInfo:{ forwardingScore: 9999, isForwarded: true}}, { quoted: m})} 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const pler = JSON.parse(fs.readFileSync('./js/db/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
	
if (!comot.public) {
if (!m.key.fromMe) return
} 
//anti link
if (isGroup && isAntiLink && isBotGroupAdmins){
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(mess.botAdmin)
let gclink = (`https://chat.whatsapp.com/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isAdmins) return reply(mess.admin)
if (isCreator) return reply(mess.owner)
await comot.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.sender
               }
            }).then((res) => reply('⚠️ Link Group Detected!\n✅ The link has been deleted!')).catch((err) => m.reply(mess.error))
}

}

    if (m.isGroup) {
            comot.readMessages([m.key])
        }

// cmd
if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mcomot MD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mcomot MD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
		
try {
ppuser = await comot.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}

switch (command) {
//=================================================//
case '🍋owner':
reply('wa.me/6283838077485 not spam')
break
case '🍋menu': {
reply('𝗣𝗿𝗼𝗰𝗰𝗲𝘀')
menu =`𝙈𝙀𝙉𝙐
=> ${prefix}owner [pembuat bot]

𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐
=> ${prefix}antilink [on/off]
=> ${prefix}group [open/close]
=> ${prefix}kick [reply/tag]
=> ${prefix}hidetag [text]

𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐
=> ${prefix}sticker [image]
=> ${prefix}tourl [image]

𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
=> ${prefix}tiktok [link]`
comot.sendMessage(m.chat, {
text: menu,
contextInfo: {  forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: v,
thumbnailUrl: dbmdUrl,
sourceUrl: gr,
mediaType: 0,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case '🍋sticker': {
if (!quoted) return reply(`❎ Reply image or video, then use this command ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
reply(mess.wait)
let encmedia = await comot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`❎ Maximum 10 Seconds!`)
let media = await quoted.download()
let encmedia = await comot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`❎ Send image or video, then use this command ${prefix + command}`)
}
}
break
case "🍋tiktok": {
if (!q) return reply(`Penggunaan Salah Contoh ${prefix+command} https://vm.tiktok.com/ZSLdF9NYN`)
await reply(mess.wait)
let tik = await fetchJson(`https://api.tiklydown.me/api/download?url=${q}`)
let vidtik = await comot.sendMessage(from, { video: { url: tik.video.noWatermark }, caption: `${petik}✅ Done sis !!${petik}` }, { quoted: m })
}
break
case '🍋tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `${petik}❎ Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}${petik}`
if (!quoted) throw `${petik}❎ Kirim/Balas Keterangan Video/Gambar ${prefix + command}${petik}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await comot.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case '🍋hidetag': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(`${petik}Text?${petik}`)
comot.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break

case '🍋group': {
if (!isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!q) return m.reply(`❎ Example: ${prefix}${command} close`)
if (args[0] == 'close') {
comot.groupSettingUpdate(from, 'announcement')
m.reply(mess.succes)
} else if (args[0] == 'open') {
comot.groupSettingUpdate(from, 'not_announcement')
m.reply(mess.succes)
} else {
reply(`❎ Example: ${prefix}${command} open`)
}}
break
case '🍋antilink':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (!args[0]) return reply(`❎ Example: ${prefix}${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('✅ Antilink active!')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return reply('✅ Success turned off antilink!')
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply(mess.succes)
} else { reply(`❎ Example: ${prefix}${command} on/off`) }
           
function generateRandomPassword() {
  // Generate a 10-character random password
  return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}
break
case '🍋kick': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply('❎ You are not an admin!')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await comot.groupParticipantsUpdate(from, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
m.reply(`${petik}🌷 Done, Kasihan Bjir Di Kick !!${petik}`)
}


break

default:
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})