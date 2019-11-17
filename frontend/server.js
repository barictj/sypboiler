const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()


app.prepare().then(() => {
    const port = server.listen(process.env.PORT || 3000);
    server.get('/posts/:id', (req, res) => {
        return app.render(req, res, '/article', { id: req.params.id })
    })
    server.get('/redirect/:id', (req, res) => {

        return app.render(req, res, '/redirect')
    })

    server.get('*', (req, res) => {

        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})