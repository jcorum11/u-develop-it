const express = require("express");
const db = require("./db/database");

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require("./routes/apiroutes");

// middleware
app.use(express.urlencoded({
    extended: false
}));    
app.use(express.json());

// api routes
app.use("/api", apiRoutes);

 // Default response for any other request (Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// run server (used event listener to make sure server goes live after it connects to the database)
db.on("open", () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});