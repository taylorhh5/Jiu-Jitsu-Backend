const server = require('./server');

server.get('/', (req, res)=>{
    res.send("working");
});

server.listen(5000, () =>
console.log("Server running on 5000")
);