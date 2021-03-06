const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "ntkt-";
const footer = "Natakita Official Discord"
const kanosumeDev = {
    guildID: '517272790659891202',
    memberCountID: '616971400384741405'
}

client.login(process.env.ntkt);
client.on("ready", () => {
    console.log('-------------------------[NTKT Verstion 109.140495]-------------------------')
    console.log('Run On Test Beta')
    client.user.setStatus('dnd')
})

client.on("guildMemberAdd", function(message) {

    let guild = message.guild;
    let member = message;
    let membercount = client.users.size;

    const embed = new Discord.RichEmbed()
    .setColor(0x09ff00)// สีเขียวสว่าง
    .setTitle(`มีคนเข้าเซิฟมาแล้ว`)
    .setDescription(`${member.user} ยินดีต้อนรับสมาชิกคนใหม่นะครับ`)
    .setThumbnail(member.user.avatarURL)
    .setFooter(footer)

    member.guild.channels.find(`name`, `ประวัติเข้าออก`).send({ embed: embed });
})

client.on("guildMemberRemove", function(message) {

    let guild = message.guild;
    let member = message;
    let membercount = client.users.size;

    const embed = new Discord.RichEmbed()
    .setColor(0xff0000) // สีแดงสว่าง
    .setTitle(`มีคนออกเซิฟไปแล้ว`)
    .setDescription(`${member.user} ได้ออกจากเซิฟแล้วฮืออออออ 😭`)
    .setThumbnail(member.user.avatarURL)
    .setFooter(footer)

    member.guild.channels.find(`name`, `ประวัติเข้าออก`).send({ embed: embed });
})

client.on('guildMemberAdd', member => {
    if (member.guild.id !== kanosumeDev.guildID) return
    client.channels.get(kanosumeDev.memberCountID).setName(`จำนวนผู้ใช้ทั้งหมด : ${member.guild.members.filter(m => !m.user.bot).size}`)
})
client.on('guildMemberRemove', member => {
    if (member.guild.id !== kanosumeDev.guildID) return
    client.channels.get(kanosumeDev.memberCountID).setName(`จำนวนผู้ใช้ทั้งหมด : ${member.guild.members.filter(m => !m.user.bot).size}`)
})

client.on("message", function(message) {
  let member = message;
  const embed = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setAuthor('Natakita Discord Invite Prevent!', 'https://cdn.discordapp.com/attachments/581353116264431616/663352508789555211/FB_IMG_1578225946960.jpg')
  .setDescription("<@" + member.author.id + "> **( " + member.author.tag + " )** กรุณาอย่าส่งคำเชิญ Discord นะครับ")
  .setTimestamp()
  if(["https://discord.gg/" , "https://discordapp.com/invite/" , "discordapp.com/invite/" , ".gg/"].some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    message.channel.send({ embed: embed });
    message.author.send({ embed: embed });
  }})
