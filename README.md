# Robot-Interface
Web page to queue up a series for serial commands before sending them to an Arduino robot

## installation

1. Make sure you have Node and NPM installed for your OS
2. Clone the repository, and go into the 'Robot-Interface' Directory
3. Run `npm install` to install the required node modules

## Development

The views folder contains the html file that the server outputs. This file should be able to queue up
many different 'commands' for the bot. And then on a submit use a http `POST` to send the command off
via the express server.

Use instruction:

1. Plug in dancepad
2. Connect to enlight wifi, password: tunnelbob
3. Connect to 192.168.42:3000
4. Controls: Arrow keys to move, triangle to undo, start to send
5. Turn on Pi last
