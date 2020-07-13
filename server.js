const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use((req, res) => { // Default response for any other request(Not Found) Catch all
    res.status(404).end();
});

// get routes
app.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

// run server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});