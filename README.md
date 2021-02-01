# perimeterx-full-stack

### Get Started
```
git clone https://github.com/williamrmyers/perimeterx-full-stack
cd perimeterx-full-stack
npm install
```

#### Before running you need to create a config file to store your keys.
```
touch config/dev.js
```

#### Copy this content to `dev.js` and add the Keys from your PerimeterX Dashboard.
```
module.exports = {
  APPID: "",
  SECRET: "",
  TOKEN: "",
  PORT: "",
};
```

When running in production, the Keys should be added as env variables; APPID, SECRET, TOKEN, and PORT.

#### Start the App
```
node server.js
```
