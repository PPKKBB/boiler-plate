const express = require('express')
const {User} = require('./model/User');
const mongoose = require('mongoose')

const config = require("./config/key");

const app = express()
const port = 5000

app.use(express.urlencoded({extended : true}))
app.use(express.json())

mongoose.connect(config.mongoURI,
{}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('우린 할 수 있어'))

app.post('/register', (req, res) => {
    // 회원가입 할 때 필요한 정보들을 클라이언트에서 가져오면 
    // 그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({success : false, err})
        return res.status(200).json({success: true})
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))