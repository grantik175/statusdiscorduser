var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "My discord server",
assets : {
large_image : "logo",
large_text : "Join my discord server and vote!" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Join my discord server" , url : "https://discord.gg/pxAkDmhqHE"},{label : "Vote my server",url : "https://server-discord.com/850347433241608222"}]
}
})
})
client.login({ clientId : "853618463755075594" }).catch(console.error);