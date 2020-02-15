# React Full Stack Boilerplate
React Full Stack Boilerplate bootstrapped with Create React App and Express Generator

## Table of Contents
- [React Full Stack Boilerplate](#react-full-stack-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Development Mode](#development-mode)
    - [Production Mode](#production-mode)
  - [Quick Start](#quick-start)
  - [Build for Production](#build-for-production)
  - [Work in Progress](#work-in-progress)

## Getting Started

### Development Mode

In the development mode, we will have 2 servers running. The front end code will be served by [Create React App's react-script](https://github.com/facebook/create-react-app) which helps with hot and live reloading. It will run on Port 9000. The "backend" server is an [Express](https://expressjs.com/) application that will on default run on Port 3000.

### Production Mode

In the production mode, the static client build files will be served by the Express application.

## Quick Start
```bash
# Clone the repository
git clone <GIT_URL>

# Go inside the directory
cd <DIRNAME>

# Install dependencies
npm run setup

# Start development servers
npm run dev
```

## Build for Production
```bash
# Run build script
npm run build

# Go into 'build' directory
cd build

# For testing only
npm install

npm start

Open browser with http://localhost:3000
```

## Work in Progress
- [ ] Add "scalable" React folder organization
- [ ] Explanation of folder structure
- [ ] Standardize linting of app and app-service
- [ ] Improve on documentation
- [ ] Add "example" folder
