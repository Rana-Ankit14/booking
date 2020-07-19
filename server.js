require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




const tokenVerification = (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null){
        return res.sendStatus(401);
    }
    jwt.verify(token,process.env.AUTH_TOKEN,(err,user)=>{
        if(err){
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
};

app.get('/api/book',tokenVerification,(req,res)=>{
    res.sendStatus(200);
})
app.post('/api/login', (req, res) => {
    const user = {
        id:1,
        username: 'Ankit',
        email: 'rana@gmail.com'
    }
    jwt.sign({user},process.env.AUTH_TOKEN,(err,token)=>{
        res.json({token})
    });
    // res.redirect('/register');
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server up and running on port 5000 .... ');
})