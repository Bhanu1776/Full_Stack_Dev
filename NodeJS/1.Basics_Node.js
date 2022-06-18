
const http = require('http');                       // Code is from nodejs official website

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');                           // Here by default 'text/plain' would be present change it to html to load html code 
//   res.end('Hello World this is Bhanu Sunka!');
  res.end(`<!DOCTYPE html>                                             <!-- Under inverted single quotes we are supposed to write html code -->
  <html lang="en">                                                     <!-- This is random HTML code -->
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Pseudo selectors & more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(223, 245, 201);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: rgb(5, 0, 0);
              background-color: rgb(221, 166, 38);
          }
          a:visited{
              background-color: yellow;
          }
          a:active{
              background-color:darkblue;
          }
          .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: crimson;
              padding:6px;
              border: none;
              cursor:pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color:darkgoldenrod;
              background-color:rgb(223, 245, 201);
              border: 2px solid black;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reprehenderit. Quam culpa eius aliquam id cumque saepe, provident odio sed eos quia nihil modi error voluptate vero autem quibusdam aperiam exercitationem! Quam, consequuntur velit.</p>
          <a href="https://yahoo.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//* Node command shell is known as Read Eval Print Loop(REPL)
//* REPL useful commands ..
// node .\filename.js will run the js file 
// Ctrl+C ==> To end command
// _ (underscore) ==> To get the previous variable value as output ..
// Double Tab ==> To get all the predefined variables (keywords)
// .exit ==> To exit REPL
// Ctrl+C, Ctrl+c (Two times) ==> To end node shell(REPL) OR Ctrl+D to do same work .. easiest way
// .save filename ==> save the current Node REPL session to a file.
// .load filename ==> load file content in current Node REPL session.
// .help ==> List of all commands
