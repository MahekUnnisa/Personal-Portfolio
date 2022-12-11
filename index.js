const express = require('express');
const app = express();
const path = require('path');
const  PORT = process.env.PORT || 3000;
//static files(css,images,javascript)
app.use('/static', express.static('static'))
//get method
//sending index.html file
app.get('/', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, 'routes/home.html'));
});

app.get('/about', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, 'routes/about.html'));
});

app.get('/contact', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, 'routes/contact.html'));
});

app.get('/blog', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, 'routes/blog.html'));
});

app.get('/github', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, 'routes/github.html'));
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