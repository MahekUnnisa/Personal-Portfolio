const express = require('express');
const app = express();
const path = require('path');
const  PORT = process.env.PORT || 3000;
//static files
app.use('/static', express.static('static'))
//get method
//sending index.html file
app.get('/', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, 'routes/home.html'));
});

app.get('/anima', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, 'routes/anima.html'));
});

//the server will listen on port 3000
//it will give a message in the console accordingly
app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is listening on ${PORT}`)
    }
    else{
        console.log("Error Occured", error)
    }}
);