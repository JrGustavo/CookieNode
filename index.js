import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.get('/', ( req, res)=>{
    res.send('Hello World')
})

app.get('/setcookie', ( req, res)=>{
    res.cookie('my cookie name',
        ' my cookie',
        {
            maxAge: 7000,
            httpOnly: true,
            sameSite: 'lax'
        })
    res.send('Hello World3')
})

app.get('/getcookies', ( req, res)=>{

    console.log(req.cookies)
    res.clearCookie('my cookie name')

    res.send('reading cookies')
})

app.listen(3000)
console.log(`Server running on port 3000`)
