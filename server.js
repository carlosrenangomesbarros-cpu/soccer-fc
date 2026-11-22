const WebSocket = require('ws');
const server = require('http').createServer((req,res)=>{
  if(req.url==='/' || req.url==='/index.html'){res.writeHead(200,{'Content-Type':'text/html'});require('fs').createReadStream('index.html').pipe(res);return;}
  res.writeHead(404);res.end('Not found');
});
const wss = new WebSocket.Server({server,path:'/ws'});
const players = new Map();
wss.on('connection', ws=>{
  let id=null, room='PUBLIC';
  ws.on('message', raw=>{
    let m; try{m=JSON.parse(raw)}catch{return}
    if(m.type==='join'){id=String(m.id||Math.random());room=String(m.room||'PUBLIC').slice(0,12);players.set(id,{id,name:String(m.name||'Jogador').slice(0,16),room,x:0,z:0});}
    if(m.type==='move'&&id&&players.has(id)){let p=players.get(id);p.x=Math.max(-21,Math.min(21,Number(m.x)||0));p.z=Math.max(-12,Math.min(12,Number(m.z)||0));}
    const state={type:'state',players:Object.fromEntries([...players].filter(([k,p])=>p.room===room))};
    for(const client of wss.clients)if(client.readyState===WebSocket.OPEN)client.send(JSON.stringify(state));
  });
  ws.on('close',()=>{if(id)players.delete(id);});
});
const PORT=process.env.PORT||3000;server.listen(PORT,()=>console.log('SOCCER FC rodando na porta '+PORT));