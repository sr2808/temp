const http = require('http')

const port = 5000

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<h1>Welcome to home Page</h1>')
        res.end()
    }

    if(req.url === '/about') {
        res.write('<h1>Welcome to About Us Page</h1>')
        res.end()
    }

    else {
        res.write('<h1>Oops !! Page not found</h1>')
        res.end()
    }
})

server.listen(port)