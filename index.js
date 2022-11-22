const express = require("express");
const app = express();
const router = require("./router/index.js")
const cors = require("cors");
const port = 3000;
app.use(express.json());
app.use("/onlisten",router);
app.use(cors({ origin: "*" }));
const start = async () => {
    try {
        app.listen(port, "127.0.0.1", () => {
            console.log("Сервер ожидает подключения...");
        });
    } catch (e) {
        console.error(e);
    }
};
start();

