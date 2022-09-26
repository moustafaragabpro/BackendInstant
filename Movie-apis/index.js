const express = require('express');
const app = express() ;

let movies = [];

app.use(express.json()) ;

app.get('/' , (req , res) => {
    res.send("Movie Apis");
});

app.get('/movies' , (req , res) => {
    res.send(movies);
});

app.get('/movies/:id' , (req , res) => {
    movies.forEach((movie , index) => {
        let id = parseInt(req.params.id);
        if(id === movie.id) res.send(movie);
    })

    res.send("There is no Movie with this id") ;
});

app.post('/movies' , (req , res) => {
    const movie = {
        id : movies.length , 
        name : req.body.name ,
        desc : req.body.desc ,
        duration : req.body.duration ,
        categories : req.body.categories 
    } ;

    if(movie.duration.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)){
        movies.push(movie) ;
        res.send(movie) ;
    }

    res.send("Not Valid duration")
});

app.put('/Movies/:id' , (req , res) => {
    const id = parseInt(req.params.id);
    if(req.body.duration.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)){
        console.log(req.body.duration);

        movies.forEach((movie , index) => {
            if(id === movie.id) {
                movie.name = req.body.name || movie.name;
                movie.desc = req.body.desc || movie.desc;
                movie.duration = req.body.duration || movie.duration;
                movie.categories = req.body.categories || movie.categories ;
            }
            return res.send(movies[index]) ;
        })
    }

    res.send("Not Valid duration")
});

app.delete('/Movies/:id' , (req , res) => {
    movies.forEach((movie , index) => {
        let id = parseInt(req.params.id);
        if(id === movie.id) {
            movies = movies.filter(item => id !== item.id)
            res.send(movies);
        };
    })
    res.send("No movie with given id");
});



app.listen(4002);