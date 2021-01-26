import express from 'express'
import mongoose from 'mongoose'
import cards from './dbCards.js'
import cors from 'cors'


//app config 
const app= express();
const port= process.env.PORT || 8001;
const conection_url= 'mongodb+srv://admin:RTXMGc9gTQybr8Q@cluster0.vdh4m.mongodb.net/tinde-db?retryWrites=true&w=majority'

//Middleswares
app.use(express.json());
app.use(cors());
//Db config 
mongoose.connect(conection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//API end-points
app.get('/',(req,res)=> res.status(200).send("Hello world"));

app.post("/tinder/cards", (req,res)=>{
  const db = req.body;

    cards.create(db, (err, data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res) => {


    cards.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data);
        }
    })
});

//Listener
app.listen(port, ()=> console.log(`listening on localhost ${port}`));
