import express from 'express';
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from './routes/auth.routes.js'
import tasksRouter from './routes/tasks.routes.js'
import { FRONTEND_URL } from './config.js';

const app = express()

const allowedOrigins = [
    'http://localhost:5173',
    'https://dre-fronted.onrender.com'
]

app.use(cors({
    // origin: 'http://localhost:5173',
    // origin: process.env.FRONTED_URL,
    // origin: allowedOrigins,
    credentials: true,
    origin: FRONTEND_URL,
}))
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
app.get("/", (req, res) => { res.send(`${process.env.TITLE}`)})
app.use("/api",authRouter)
app.use("/api",tasksRouter)

export default app;