require('dotenv').config();

const server = require('./server');

server.get('/', (req, res)=>{
    res.send("working");
});

const port = process.env.PORT || 5000;

server.listen(port, () =>
console.log("Server running on 5000")
);