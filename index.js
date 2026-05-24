const mineflayer = require('mineflayer')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('AFK Bot Running')
})

app.listen(process.env.PORT || 3000)

const bot = mineflayer.createBot({
  host: 'tbg.freezehost.com',
  port: 25565,
  username: 'AFK_Bot',
  auth: 'offline'
})

bot.on('spawn', () => {
  console.log('Bot joined server!')

  setInterval(() => {

    // Jump
    bot.setControlState('jump', true)

    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)

    // Random camera movement
    bot.look(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI / 2,
      true
    )

  }, 30000)
})

bot.on('error', err => console.log(err))
bot.on('end', () => console.log('Disconnected'))
