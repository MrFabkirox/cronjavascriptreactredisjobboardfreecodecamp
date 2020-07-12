<img src={logo} className="App-logo" alt="logo" /> <br />

<a href="https://jobs.github.com/api"
  >jobs.github.com/api</a> <br />

<a href="https://material-ui.com/api/typography/#import"
  >material-ui.com/api/typography/#import</a> <br />

<a href="https://enable-cors.org/server_expressjs.html"
  >enable-cors.org/server_expressjs</a> <br />

res.header("Access-Control-Allow-Origin", "http:localhost:3000");
ko for some reason.. , using cors npm instead

<h3>1. Cronjob with cron</h3> <br />

<h4>at the root of the project</h4> <br />
the cron itself<br />
node worker/index.js<br />
<br />
logic calling cron to the express server terminal<br />
node worker/tasks/fetch-github.com<br />
curl localhost/jobs<br />

<h3>2. Client</h3>
yarn start <br />

<h3>3. Server</h3>
npm run nodemon<br />
