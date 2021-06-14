const express   = require("express");
const mongoose = require("mongoose");
const config    = require("config");
const authRouter = require("./routes/auth.routes")
const corsMiddleware = require('./middleware/cors.middleware')

const app = express();
const PORT = config.get('serverPort');

app.use(corsMiddleware)
app.use(express.json());
app.use("/api/auth", authRouter);

//подключенние к БД ассинхр. поєтому и функция ассинхронная
const start= async () =>{
    try {

        await mongoose.connect(config.get("bdUrl"))
        app.listen(PORT, () =>{
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log('wrong');
    }
}

start();