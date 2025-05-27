import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8000;

app.set('view engine', 'ejs')

app.get('/', (req,res)=>res.render('index', {message: 'Template engine '})); // <-- index is from index.ejs

app.get('/example', (req,res) => res.render('about'));

app.get('/api/data', (req,res)=>{
    res.json({msg: 'Hello from the Server'})
})

app.listen(PORT, ()=> console.log('Server is running on PORT ', PORT))