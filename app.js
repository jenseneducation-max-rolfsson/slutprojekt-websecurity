const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const jwtVerifier = require('express-jwt')

const secret = 'secret';

app.use(express.static('public'))
app.use(express.json())

const user = { email: 'kurwa@kurwamail.com' , password: '1234567' }

function createToken(){
    const expirationDate = Math.floor(Date.now() /1000) + 30;
    const token = jwt.sign({userID: user.email, exp: expirationDate}, secret);
    return token
}

app.post('/auth', (req,res) => {
if (req.body.email == user.email && req.body.password == user.password){
    res.send(createToken())
}else {
    res.sendStatus(400)
}
})

app.get('/verify',jwtVerifier({secret:secret}), (req,res) => {
    res.send("inloggad");
})

app.use((err, req, res, next) => {
    if( err.name === 'UnauthorizedError'){
        res.status(500).send(err.message);
    }
});

app.listen(8080, () => console.log("Server started"))
