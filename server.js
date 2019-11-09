const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.json());

// Routes
const userRouter = require('./routes/users');
//const postRouter = require('.routes/posts');
// const commentRouter = require('./routes/comments');
 const likeRouter = require('./routes/likes')
// const albumRouter = require('./routes/albums');
// const pictureRouter = require('./routes/pictures');

app.use('/users', userRouter);
app.use('/likes', likeRouter);

app.listen(port, ()=>{
    console.log('Server is running!')
})