const express = require("express");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 4000)

app.use(cors());
app.use(express.json());


app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/travels", require("./routes/travels"));


module.exports = app;