const app = require('express')();
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());

app.use((req, res, next) => {//cors policy
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use('/auth',authRoute);

app.use((error,req,res,next)=>{//error handling
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({
      message: message
    });
});

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(result=>{
    console.log('connected with database');
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})