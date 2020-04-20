#!/bin/sh
set -e

cd ..

echo "Step 0: Clean up existing deployment package"
rm -rf ./build || true
mkdir build

echo "Step 1: Copy app-service to build folder"
rsync -av --progress ./app-service/* ./build --exclude node_modules --exclude .gitignore

echo "Step 2: Build React Application"
cd ./app
INLINE_RUNTIME_CHUNK=false npm run build

echo "Step 3: Copy react build files to build"
cd ../
rm -r ./build/public || true
mkdir -p ./build/public
rsync -av --progress ./app/build/* ./build/public

echo "Step 4: Copy Dockerfile to build"
cp ./docker/* ./build

echo "Finished"