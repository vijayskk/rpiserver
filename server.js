const {readFileSync,writeFileSync} = require('fs')

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    const count = readFileSync('./count.txt')
    console.log('count : ',count)
    const newCount = parseInt(count) + 1
    writeFileSync('./count.txt',`${newCount}`)
    
    res.send(`
        <DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport " content="width=device - width, initial- scale=1" />
            <title>RP1 Hosted website</title>
        </head>
        <body>
        <h1>Welcome to my Website !</h1>
        <p>This page has been viewed ${newCount} times ! </p>
        <br>
        <a href="/reset">Reset</a>
        </body>
        </html>
    `)
})

app.get('/reset',(req,res)=>{
    writeFileSync('./count.txt',`0`)
    res.redirect('/')
    console.log("got reset command")
})

app.listen(5000, ()=>{
    console.log('http://localhost:5000/')
})