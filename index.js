var WebSocket = require('ws');
var server = new WebSocket.Server({ port: 8080 });
server.on('connection', (ws) => {
    console.log('server: receive connection.');
    ws.on('message', (message) => {
        console.log('server: received: %s', message);
    });
    setInterval(() => {
      ws.send(`server number: ${Math.random()}`);
    }, 2000);
});
console.log('server start.');

/* client code:
    var client = new WebSocket('ws://localhost:8080');
    client.onopen = () => {
      console.log('connection open');
      setInterval(() => {
        client.send(`client number: ${Math.random()}`);
      }, 5000);
    };
    client.onmessage = (e) => {
      console.log('received from server: ' + e.data);
    };
*/