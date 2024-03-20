const express = require( 'express' );
const above20k = require('./models/above20k')
const bet10kto15k = require('./models/bet10kto15k');
const bet15kto20k = require('./models/bet15kto20k');
const under10k = require('./models/under10k');
const mongoose = require('mongoose')

const MONGODB_URI="mongodb+srv://ashuwaniji:ashu8817@cluster0.5fuce6r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGODB_URI).then(()=>{console.log('db connected')}).catch(err => console.error(err))




const app  = express();
const PORT  = process.env.PORT || 3000


function startServer(port) {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') { // If port is already in use
        console.log(`Port ${port} is already in use.`);
        console.log('Trying another port...');
        startServer(port + 1); // Try the next port
      } else {
        console.error('Server error:', err);
      }
    });
  }
  
  startServer(PORT);


app.get("/api/under10k" ,async (req,res)=>{
const  data=  await under10k.find({})
res.setHeader('Cache-Control', 'no-store'); // Disable caching

res.status(200).json(data)


})



app.get("/api/bet10kto15k" ,async (req,res)=>{
    const  data=  await bet10kto15k.find({})
    res.setHeader('Cache-Control', 'no-store'); // Disable caching

    res.status(200).json(data)
    })


app.get("/api/bet15kto20k" ,async (req,res)=>{
    const  data=  await bet15kto20k.find({})
    res.setHeader('Cache-Control', 'no-store'); // Disable caching

    res.status(200).json(data)
    })


app.get("/api/above20k" ,async (req,res)=>{
    const  data=  await above20k.find({})
    res.setHeader('Cache-Control', 'no-store'); // Disable caching

    res.status(200).json(data)
    })
