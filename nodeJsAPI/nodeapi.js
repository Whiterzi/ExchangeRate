
import fetch from 'node-fetch';
// import http from 'http'
import express from 'express'
import cors from 'cors';

const app = express()
app.use(cors())

// var api_url = 'https://tw.rter.info/capi.php';
// const currencydata = fetch(api_url, {})
//   .then((response) => {
//     // 這裡會得到一個 ReadableStream 的物件
//     // console.log(response);
//     // 可以透過 blob(), json(), text() 轉成可用的資訊
//     return response.json();
//   }).then((jsonData) => {
//     // console.log(jsonData);
//     return (jsonData)
//   }).catch((err) => {
//     console.log('錯誤:', err);
//   });

// const http = require('http')
const PORT = 3001

// const server = http.createServer((request, respone) => {
//   respone.writeHead(200, { 'Content-Type': 'text/plain' });
//   respone.end('hello world');
// })

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/currency', (req, res) => {
  var api_url = 'https://tw.rter.info/capi.php';
  fetch(api_url, {})
  .then((response) => {
    // 這裡會得到一個 ReadableStream 的物件
    // console.log(response);
    // 可以透過 blob(), json(), text() 轉成可用的資訊
    return response.json();
  }).then((jsonData) => {
    // console.log(jsonData);
    res.json(jsonData)
    return (jsonData)
  }).catch((err) => {
    console.log('錯誤:', err);
  });
})

// server.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`)
// })
app.listen(PORT ,()=>{
  console.log(`listening on port ${PORT}`)
})