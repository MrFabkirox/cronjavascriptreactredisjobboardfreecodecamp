const express = require('express');
const index = express();

const cors = require('cors'); 
index.use(cors());

const port = 3001;

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

index.get('/jobs', async (req, res) => {

  const jobs = await getAsync('github');
  // console.log(JSON.parse(jobs).length); // as stringified @ fetch-gith
  // res.header("Access-Control-Allow-Origin", "http:localhost:3000");

  return res.send(jobs);
});

module.exports = index;
