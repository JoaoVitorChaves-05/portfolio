const express = require('express')

class Server {
    constructor() {
        this.PORT = process.env.PORT || 3000
        this.app = express()
        this.app.set('views', 'views')
        this.app.set('view engine', 'ejs')
        this.middlewares()
        this.routes()
        this.start()
    }

    middlewares() {
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.render('home')
        })
    }

    start() {
        this.app.listen(this.PORT, () => console.log('> Server is running on port: ' + this.PORT))
    }
}

new Server()