import express from "express"
import cors from "cors"
import comments from "./api/comments.route.js"

const app = express();

//use cors module within express
app.use(cors())

//server can accept request body
app.use(express.json())

//specify initial url route, pull route from "comments" file
app.use("/api/v1/comments", comments)
//handle wild card route
app.use('*', (req, res) => res.status(404).json({ error: "not found" }))

//export app as module to be imported into the file acting as the db
export default app;