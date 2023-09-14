import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import model from './model';
import query from './query';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import auth from './middleware';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())
const port = process.env.PORT;
const server = mongoose.connect(process.env.MONGO_URI!, { retryWrites: true, w: 'majority' })
.then(()=>{
    console.log('Connected to database successfully');
})
.catch((err)=>{
    console.log(err);
})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/login', async (req:Request, res:Response)=>{
  try {
    const email = await model.findOne({email: req.body.email});
    if(email){
      let matchPasswords = await bcrypt.compare(req.body.password, email.password);
      
      if(!matchPasswords){
        res.status(401).json({ "error": "invalid credentials!" })
      }else{
        const data = {
          user: {
            id: email._id
          } 
        }
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY!);
        res.cookie("jwt", token);
        res.status(202).json({ "success": "user loggedin successfully!", "user": email, "token": token });
      }
    }else{
      res.status(301).json({ "error": "No user found of the given email!" })
    }
  } catch (error) {
    res.status(500).json({ "error": error })
  }
})

app.post('/query', async (req:Request, res:Response)=>{
  try {
    const info = new query({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      message: req.body.message
    })
    console.log(req.body);
    await info.save()
    res.status(201).json({message: "Your Query has been submitted successfully."})
  } catch (error) {
    console.log(error);
  }
});

app.post('/getquery', auth, async(req:Request, res: Response)=>{
  try {
    // const token = await req.header("auth-token");
    // console.log(req.header("auth-token"));
    
    // if(token){
      // const check = jwt.verify(token, process.env.JWT_SECRET_KEY!);
      // if(check){
        const queries = await query.find({});
        res.status(200).send(queries);
      // }
      // else{
        // res.status(401).send('Invalid token');
      // }
    // }else{
      // res.status(401).send('Token not provided!');
    // }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});