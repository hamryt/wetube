import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();//  가리고 싶은 정보를 가리는 것
import "./models/Video";
import "./models/Comment"
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`@@Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);