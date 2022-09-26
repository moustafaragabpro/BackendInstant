const express = require('express');
const app = express() ;

app.use(express.json());

let books = [
    
]


app.get('/books' , (req , res) => {
    res.send(books) ;
})

app.get('/books/:id' , (req , res) => {
    books.forEach((book , index) => {
        let id = parseInt(req.params.id);
        if(id === book.id) res.send(book);
    })

    res.send("There is no book with this id") ;
})

app.post('/books' , (req , res) => {
    const book = {
        id : books.length || 0 , 
        name : req.body.name ,
        desc : req.body.desc ,
        publishedAt : req.body.publishedAt ,
        authorName : req.body.authorName 
    } ;
    books.push(book) ;
    res.send(book) ;
})

app.put('/books/:id' , (req , res) => {
    const id = parseInt(req.params.id);
    books.forEach((book , index) => {
        if(id === book.id) {
            book.name = req.body.name || book.name;
            book.desc = req.body.desc || book.desc;
            book.publishedAt = req.body.publishedAt || book.publishedAt;
            book.authorName = req.body.authorName || book.authorName ;
        }

    })
    res.send(books[id]) ;
})

app.delete('/books/:id' , (req , res) => {
    books.forEach((book , index) => {
        let id = parseInt(req.params.id);
        if(id === book.id) {
            books = books.filter(item => id !== item.id)
            res.send(books);
        };
    })
    res.send("No Book with given id");
})

app.listen(4000) ;