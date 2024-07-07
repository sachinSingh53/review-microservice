// import { databaseConnection } from "./database.js"
import { start } from "./server.js";
import express from 'express';
import {databaseConnection} from './database.js'
const app = express();

const init = async()=>{
    await databaseConnection();
    return await start(app);

}

const {reviewChannel} = await init();



export{reviewChannel};