const http = require("http");

let server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("home route from GET");
    } 
    else if (req.url === "/" && req.method === "POST") {
        res.end("home route from POST");
    } 
    else if (req.url === "/about") {
        res.end("about");
    } 
    else {
        res.statusCode = 404;
        res.end("404 not found");
    }
});

let PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

// localhost:3000 //to run in chrome

//201(CREATED)    202(ACCEPTED)   200(OK)    400    401    404   500    5003

//https methods
// 1 -> GET 
// 2 -> POST
// 3 -> PUT
// 4 -> PATCH
// 5 -> DELETE

