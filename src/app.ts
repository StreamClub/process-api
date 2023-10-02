import express from 'express'

const app = express()
const port = 8080 // default port to listen

app.get('/', (req: any, res: any) => {
    res.send('Welcome to Stream Club!')
})

app.listen(port, () => {
    console.log(`Example app is now listening on port ${port}`)
})
