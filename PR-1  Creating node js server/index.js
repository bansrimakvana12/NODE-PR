const http = require('http');
const port = 10000;
const fs = require('fs');

const requestHandle = (req, res) => {
    let filename = "";

    switch (req.url) {
        case '/':
            filename = "./index.html"
            break;
        case '/home':
            filename = "./home.html"
            break;
        case '/about':
            filename = "./about.html"
            break;
        case '/contact':
            filename = "./contact.html"
            break;
        case '/product':
            filename = "./product.html"
            break;
        default:
            filename = "./error.html"
    }
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.log(err);
            return false;
        }
        res.end(data);
    })

}

const server = http.createServer(requestHandle);
server.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is run: ${port}`);

})