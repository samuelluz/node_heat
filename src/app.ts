import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors"
import { Server } from "socket.io"

import { router } from "./routes"

const app = express();
app.use(cors())

const serverHTTP = http.createServer(app)

const io = new Server(serverHTTP, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => {console.log("usuário conectado no socket "+socket.id)})

app.use(express.json())
app.use(router);
app.get("/github", (req, res) => {
    res.redirect(
        `http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );
})

app.get("/signin/callback", (req, res) => {
    const { code } = req.query;
    return res.json(code)
})

 export { serverHTTP, io }