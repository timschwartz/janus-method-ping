# janus-method-ping
Adds 'ping' command to server.

Command:

```json
{ "method": "ping", "data": { "message": "hello" } }
```

Server reply:

```json
{ "method": "pong", "data": { "message": "hello" } }
```

'message' argument is optional.
