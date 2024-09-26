import express from 'express';
import bodyParser from 'body-parser';

const server = express();
const portNum = 3000;
let postedList = [];

server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended : true}));

server.get('/',(req,res)=>{
    res.render("index.ejs");
});

server.get('/posts',(req,res)=>{
    res.render("posts.ejs");
})
server.post('/posts', (req,res)=>{
    let posted = req.body["userinput"];
    postedList.push(posted);
    console.log("Hello world");
    console.log(postedList);
    res.redirect('/posts');

})

server.get('/myPosts',(req,res)=>{
    res.render("myPosts.ejs",{mypostList : postedList})
})
server.listen(portNum , ()=>{console.log("running on port num "+portNum)});
