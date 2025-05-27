import express from 'express';
import data from './data.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8000;

app.set('view engine', 'ejs')

app.get('/', (req,res)=> res.render('index', {posts: data}))
app.get('/post/:id', (req,res) =>{
    const id = Number(req.params.id)
    const post = data.find(x => x.id === id )
    if (!post){
        res.status(404).render('404', {msg: 'id does not exist '})
    } else {
        res.render('post', {post: post}) 
    }
})

app.get('/about', (req,res)=> res.render('about'))

app.get('/contact', (req,res)=> res.render('contact'))

app.listen(PORT, ()=> console.log('Server is running on PORT ', PORT))