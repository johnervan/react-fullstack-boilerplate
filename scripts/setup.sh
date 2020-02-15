#!/bin/sh
echo 'Installing node_modules in main directory'
npm install

echo 'Installing node_modules in app directory'
cd ./app
npm install

echo 'Installing node_modules in app-service directory'
cd ../app-service
npm install

echo 'Done setting up successfully!'
echo 'Start the development servers by executing npm run dev'