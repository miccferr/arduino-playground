# Arduino + Node + Websocket

## Requirements:

- Arduino Uno
- Ethernet shield 2
- Wi-Fi Modem + Router

## SETUP

For local server:

- flash arduino with `StandardFirmataEthernet`
- connect arduino via Ethernet to the Router
- start local webserver `node scriptEthernetSocket.js`


For remote access:

- do step 1 & 2 as above
- setup portforwarding on your router to remotely access arduino
- figure out how to access arduino from server outside
