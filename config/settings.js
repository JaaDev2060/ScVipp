const fs = require('fs')
const chalk = require('chalk')
const petik = '```'

global.owner = ['6283838077485']
global.ownvcard = '+62 838-3807-7485'
global.nomerOwner = '6283838077485'
global.nameowner = '𝗝𝗮𝗮 𝗢𝗙𝗖'
global.namebot = 'ComotBotz-MD'
global.imel = `jaaofc@gmail.com`
global.dbmdUrl = `https://telegra.ph/file/9c25ddb1199bfea0857db.jpg`
global.gr = `https://chat.whatsapp.com/ILg7FNEViK89NKMpO25RiS`
global.anticall = false

//Name stiker
global.packname = 'Comot-MD'
global.author = '𝗝𝗔𝗔 𝗢𝗙𝗖\n'

// image
global.dbimg = fs.readFileSync('./image/logo.jpg')

global.mess = {
    wait: `${petik}⌛ Please wait sis${petik}`,
    succes: `${petik}✅ Success sis !!${petik}`,
    publics: `${petik}✅ Succes changed to public!${petik}`,
    selfs: `${petik}✅ Succes changed to self!${petik}`,
    admin: `${petik}❎ This feature is only admin !!${petik}`,
    botAdmin: `${petik}❎ Bot is not Admin !!${petik}`,
    owner: `${petik}❎ Owner Only !!${petik}`,
    group: `${petik}❎ Group only features !!${petik}`,
    private: `${petik}❎ Private Only !!${petik}`,
    error: `${petik}❎ Error 404\nLapor Ke owners comot bot Jika Eror \nLapor Ke Owners Bila penting !!${petik}`,
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})