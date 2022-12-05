# Steps to develop a website from scratch with the help of pug

1. Initialize the folder with node

    ```Javascript
    npm init -- in project folder
    ```

2. install express and pug

    ```javascript
    sudo npm install -g express --unsafe-perm=true --allow-root
    sudo npm install -g pug --unsafe-perm=true --allow-root
    ```

---

- Create static and views folder in project directory ..
  - Views ==> All pug templates
  - Static ==> All css, jss and image files ..

---

## Express Stuff

1) Import all required modules in header and and don't forget to include const app = express();
2) Next thing to do is, Add Express static file serving code
3) And for setting template engine as pug add pug view engine code
4) To start the server set specific port number and add respective code for that ..
5) Create a root(Home)(/) Endpoint

---

==> [pug documentation](https://pugjs.org/api/getting-started.html "Click here to open pug docs")
